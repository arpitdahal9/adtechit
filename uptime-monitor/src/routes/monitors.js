const express = require('express');
const router = express.Router();
const monitorController = require('../controllers/monitorController');
const authenticateToken = require('../middleware/auth');

router.use(authenticateToken); // Protect all routes

router.get('/', monitorController.getMonitors);
router.post('/', monitorController.addMonitor);
router.delete('/:id', monitorController.deleteMonitor);
router.get('/:id/logs', monitorController.getMonitorLogs);

module.exports = router;
