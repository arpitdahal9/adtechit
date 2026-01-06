const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const monitorRoutes = require('./routes/monitors');
const { startScheduler } = require('./services/scheduler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/monitors', monitorRoutes);

// Health check
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Start scheduler
startScheduler();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
