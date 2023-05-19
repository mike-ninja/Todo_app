const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')


// GET /todo - Get all todo
router.get('/', todoController.getAllTodo);

// GET /todo/:id - Get a specific todo
router.get('/:id', todoController.getTodoById);

// POST /todo - Create a new todo
router.post('/', todoController.createTodo);

// PUT /todo/:id - Update a specific todo
router.put('/:id', todoController.updateTodo);

// DELETE /todo/:id - Delete a specific todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router

