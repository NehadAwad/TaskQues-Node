const express = require('express')
const router = express.Router()
const { getAllTasks, createTask, updateTask, deleteTask } = require('../controllers/tasks')

router.route('/').get(getAllTasks)
router.route('/create').get(createTask)

module.exports = router