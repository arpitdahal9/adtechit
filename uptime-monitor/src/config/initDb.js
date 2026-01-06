const db = require('./db');

const createTables = async () => {
  const userTable = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const monitorTable = `
    CREATE TABLE IF NOT EXISTS monitors (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      url VARCHAR(255) NOT NULL,
      friendly_name VARCHAR(255),
      check_interval INTEGER DEFAULT 5, -- in minutes
      status VARCHAR(50) DEFAULT 'unknown',
      last_checked TIMESTAMP,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const logsTable = `
    CREATE TABLE IF NOT EXISTS check_logs (
      id SERIAL PRIMARY KEY,
      monitor_id INTEGER REFERENCES monitors(id) ON DELETE CASCADE,
      status VARCHAR(50) NOT NULL,
      response_time INTEGER, -- in ms
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await db.query(userTable);
    console.log('Users table created/verified');
    await db.query(monitorTable);
    console.log('Monitors table created/verified');
    await db.query(logsTable);
    console.log('Check logs table created/verified');
    process.exit(0);
  } catch (err) {
    console.error('Error initializing database:', err);
    process.exit(1);
  }
};

createTables();
