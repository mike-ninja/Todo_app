import { useEffect, useState } from 'react'

import Header from './components/Header'
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos'

import todoServices from './services/todo'

import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const fetchedTodos = await todoServices
        .getAllTodo()
      setTodos(fetchedTodos)
    } catch (error) {
      console.log(`Failed to fetch todos: ${error}`)
    }
  }

  const addTodo = async (newTodo) => {
    if (newTodo.task.length) {
      try {
        const createdTodo = await todoServices
          .createTodo(newTodo)
        setTodos(todos.concat(createdTodo))
      } catch (error) {
        console.log(`Failed to create todo: ${error}`)
      }
    } else {
      alert('Cannot have an empty task!')
    }
  }

  const deleteTodo = async (id) => {
    try {
      await todoServices
        .deleteTodo(id)
      setTodos(todos.filter((todo) => todo.id !== id))
    } catch (error) {
      alert('Task no longer exists!')
      setTodos(todos.filter(todo => todo.id !== id))
      console.log(`Failed to delete todo: ${error}`)
    }
  }

  const editTodo = async (editedTodo) => {
    if (editedTodo.task.length) {
      try {
        const id = editedTodo.id
        const updatedTodo = await todoServices
          .updateTodo(id, editedTodo)
        setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo))
      } catch (error) {
        alert('Task no longer exists!')
        setTodos(todos.filter(todo => todo.id !== editedTodo.id))
        console.log(error.message)
      }
    } else {
      alert('Cannot have an empty task!')
    }
  } 

  return (
    <div className="container">
      <Header />
      <AddTodo addTodo={addTodo} />
      <ListTodos todos={todos} editTodo={editTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
