const db = require('../config/db');

exports.getMonitors = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM monitors WHERE user_id = $1 ORDER BY created_at DESC', [req.user.id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.addMonitor = async (req, res) => {
  const { url, friendly_name, interval } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  // Basic URL validation
  try {
    new URL(url);
  } catch (_) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  try {
    const result = await db.query(
      'INSERT INTO monitors (user_id, url, friendly_name, check_interval) VALUES ($1, $2, $3, $4) RETURNING *',
      [req.user.id, url, friendly_name || url, interval || 5]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteMonitor = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM monitors WHERE id = $1 AND user_id = $2 RETURNING *', [id, req.user.id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Monitor not found or unauthorized' });
    }
    res.json({ message: 'Monitor deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getMonitorLogs = async (req, res) => {
  const { id } = req.params;
  try {
    // Verify ownership first
    const monitorCheck = await db.query('SELECT id FROM monitors WHERE id = $1 AND user_id = $2', [id, req.user.id]);
    if (monitorCheck.rowCount === 0) {
      return res.status(404).json({ error: 'Monitor not found or unauthorized' });
    }

    const logs = await db.query('SELECT * FROM check_logs WHERE monitor_id = $1 ORDER BY created_at DESC LIMIT 50', [id]);
    res.json(logs.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
