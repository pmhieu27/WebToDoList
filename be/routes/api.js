const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware');
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const { register, login } = require('../controllers/authController');

// User routes (protect all except registration)
router.post('/api/user', register); 
router.get('/api/user', verifyToken, getUsers);
router.get('/api/user/:id', verifyToken, getUserById);
router.put('/api/user/:id', verifyToken, updateUser);
router.delete('/api/user/:id', verifyToken, deleteUser);

// Task routes (all protected)
router.post('/api/task', verifyToken, createTask);
router.get('/api/task', verifyToken, getTasks);
router.get('/api/task/:id', verifyToken, getTaskById);
router.put('/api/task/:id', verifyToken, updateTask);
router.delete('/api/task/:id', verifyToken, deleteTask);

// Auth routes
router.post('/api/login', login);   // Login

module.exports = router;