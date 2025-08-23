const { Task } = require('../models');

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        return res.status(201).json(task);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        console.log(tasks)
        return res.json(tasks);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ error: 'Task not found' });
        return res.json(task);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const [updated] = await Task.update(req.body, { where: { id: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Task not found' });
        const task = await Task.findByPk(req.params.id);
        return res.json(task);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const deleted = await Task.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Task not found' });
        return res.json({ message: 'Task deleted' });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };