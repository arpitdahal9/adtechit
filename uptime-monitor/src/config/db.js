const { Pool } = require('pg');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const connectionConfig = {
  connectionString: process.env.DATABASE_URL,
};

if (isProduction) {
  connectionConfig.ssl = {
    rejectUnauthorized: false,
  };
}

const pool = new Pool(connectionConfig);

pool.on('connect', () => {
  console.log('Connected to the database');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
