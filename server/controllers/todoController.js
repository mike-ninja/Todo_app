// const client = require('../db_config/db')
const client = require('../db_config/db')

// Get all todo element
const getAllTodo = async (req, res) => {
  try {
    const allTodo = await client.query('SELECT * FROM todo')
    res.json(allTodo.rows)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve Tasks.' })
  }
}

// Get a todo element
const getTodoById = async (req, res) => {
  try {
    const { id } = req.params

    const todo = await client.query(
      'SELECT * FROM todo WHERE id = $1',
      [id]
    )
    if (!todo.rows[0]) {
      return res.status(404).json({ error: 'Task not found.'})
    } else {
      return res.json(todo.rows[0])
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve Task.' })
  }
}

// Create a todo element
const createTodo = async (req, res) => {
  try {
    const { task } = req.body
    if (task.length) {
      const newTodo = await client.query(
        'INSERT INTO todo (task, status) VALUES ($1, $2) RETURNING *',
        [task, false]
      )
      return res.status(201).json(newTodo.rows)
    } else {
      return res.status(400).json({ error: 'Task is empty.'})
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Task.' })
  }
}

// Update a todo element
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params
    const { task, status } = req.body

    if (task.length) {
      const updatedTodo = await client.query(
        'UPDATE todo SET task = $1, status = $2 WHERE id = $3 RETURNING *',
        [task, status, id]
      )
      if (!updatedTodo.rows[0]) {
        return res.status(404).json({ error: 'Task not found.' });
      } else {
        return res.json(updatedTodo.rows[0]);
      }
    } else {
      return res.status(400).json({ error: 'Task is empty.'})
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Task.' });
  }
}

// Delete a todo element
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params
    
    const deletedTodo = await client.query(
      'DELETE FROM todo WHERE id = $1',
      [id]
    )
    if (deletedTodo.rowCount === 0) {
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
