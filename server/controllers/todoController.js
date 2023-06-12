const Todo = require('../models/todo')

const getAllTodo = async (req, res) => {
  try {
    const allTodo = await Todo.findAll()
    res.json(allTodo)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve Tasks.' })
  }
}

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params

    const todo = await Todo.findByPk(id)

    if (!todo) {
      return res.status(404).json({ error: 'Task not found.'})
    } else {
      return res.json(todo)
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve Task.' })
  }
}

const createTodo = async (req, res) => {
  try {
    const { task } = req.body

    if (task && task.trim().length) {
      const newTodo = await Todo.create({ task, completed: false })
      return res.status(201).json(newTodo.rows)
    } else {
      return res.status(400).json({ error: 'Task is empty.'})
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Task.' })
  }
}

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params
    const { task, status } = req.body

    if (task && task.trim().length) {
      const updatedTodo = await Todo.update({ task, completed: status }, {
        where: { id },
        returning: true,
      })

      if (updatedTodo[0] === 0) {
        return res.status(404).json({ error: 'Task not found.'})
      } else {
        return res.json(updatedTodo[1][0])
      }
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Task.' });
  }
}

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params
    
    const deletedTodo = await Todo.destroy({
      where: { id },
    })

    if (deletedTodo === 0) {
      return res.status(404).json({ error: 'Task not found.' });
    } else {
      return res.json({ message: 'Task was deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete Task.' });
  }
}

module.exports = {
  getAllTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
}
