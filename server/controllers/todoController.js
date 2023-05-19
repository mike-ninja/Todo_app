const pool = require('../db_config/db')

// Get all todo element
const getAllTodo = async (req, res) => {
  try {
    const allTodo = await pool.query('SELECT * FROM todo')

    res.json(allTodo.rows)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve Tasks.' })
  }
}

// Get a todo element
const getTodoById = async (req, res) => {
  try {
    const { id } = req.params

    const todo = await pool.query(
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
    const newTask = req.body.task
    const dueDate = req.body.due_date

    const newTodo = await pool.query(
      'INSERT INTO todo (task, status, due_date) VALUES ($1, $2, $3) RETURNING *',
      [newTask, false, dueDate]
    ) 

    res.status(201).json(newTodo.rows)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Task.' })
  }
}

// Update a todo element
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params
    const newTask = req.body.task
    const newStatus = req.body.status
    const newDueDate = req.body.due_date

    const updatedTodo = await pool.query(
      'UPDATE todo SET task = $1, status = $2, due_date = $3 WHERE id = $4 RETURNING *',
      [newTask, newStatus, newDueDate, id]
    )

    if (!updatedTodo.rows[0]) {
      return res.status(404).json({ error: 'Task not found.' });
    } else {
      return res.json(updatedTodo.rows[0]);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Task.' });
  }
}

// Delete a todo element
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params
    
    const deletedTodo = await pool.query(
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
