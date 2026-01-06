const cron = require('node-cron');
const axios = require('axios');
const db = require('../config/db');

const checkMonitor = async (monitor) => {
  const start = Date.now();
  let status = 'down';
  let responseTime = 0;

  try {
    const res = await axios.get(monitor.url, { timeout: 5000 });
    // Consider 2xx status as UP
    if (res.status >= 200 && res.status < 300) {
      status = 'up';
    }
    responseTime = Date.now() - start;
  } catch (error) {
    status = 'down';
    responseTime = Date.now() - start;
    // console.error(`Check failed for ${monitor.url}: ${error.message}`);
  }

  // Update DB
  try {
    await db.query(
      'INSERT INTO check_logs (monitor_id, status, response_time) VALUES ($1, $2, $3)',
      [monitor.id, status, responseTime]
    );

    await db.query(
      'UPDATE monitors SET status = $1, last_checked = NOW() WHERE id = $2',
      [status, monitor.id]
    );
    
    // Log change or alert if needed
    if (monitor.status !== status && monitor.status !== 'unknown') {
        console.log(`Alert: Monitor ${monitor.url} changed status from ${monitor.status} to ${status}`);
        // Here you would trigger email/slack alert
    }

  } catch (err) {
    console.error('Error updating monitor status:', err);
  }
};

const runChecks = async () => {
  try {
    // Find monitors that need checking
    // Logic: last_checked is null OR (now - last_checked) > interval * 60 seconds
    const query = `
      SELECT * FROM monitors 
      WHERE last_checked IS NULL 
      OR last_checked < NOW() - (check_interval * INTERVAL '1 minute')
    `;
    const result = await db.query(query);
    
    const monitorsToCheck = result.rows;
    if (monitorsToCheck.length > 0) {
        console.log(`Running checks for ${monitorsToCheck.length} monitors...`);
        // Run in parallel
        await Promise.all(monitorsToCheck.map(checkMonitor));
    }
  } catch (err) {
    console.error('Scheduler error:', err);
  }
};

const startScheduler = () => {
  // Run every minute
  cron.schedule('* * * * *', () => {
    runChecks();
  });
  console.log('Scheduler started');
};

module.exports = { startScheduler };
