const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { task: Task } = require('../models');

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const [updated] = await Task.update(req.body, { where: { id: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Task not found' });
        const task = await Task.findByPk(req.params.id);
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const deleted = await Task.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Task not found' });
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };