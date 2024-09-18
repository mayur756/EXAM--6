const express = require('express');
const router = express.Router();
const { getUserTasks, filter } = require('../controllers/task.controller');

router.get('/updtasks/', getUserTasks);


module.exports = router;
