const express = require('express');
const router = express.Router();

const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');

router.post('/api/user', createUser);
router.get('/api/user', getUsers);
router.get('/api/user/:id', getUserById);
router.put('/api/user/:id', updateUser);
router.delete('/api/user/:id', deleteUser);

router.post('/api/task', createTask);
router.get('/api/task', getTasks);
router.get('/api/task/:id', getTaskById);
router.put('/api/task/:id', updateTask);
router.delete('/api/task/:id', deleteTask);

module.exports = router;