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
      await todoServices
        .getAllTodo()
        .then(fetchedTodos => {
          setTodos(fetchedTodos)
        })
    } catch (error) {
      console.log(`Failed to fetch todos: ${error}`)
    }
  }

  const addTodo = async (newTodo) => {
    if (newTodo.task.length) {
      try {
        await todoServices
          .createTodo(newTodo)
          .then(createdTodo => {
            setTodos(todos.concat(createdTodo))
          })
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
        .then(response => {
          setTodos(todos.filter((todo) => todo.id !== id))
      })
    } catch (error) {
      console.log(`Failed to delete todo: ${error}`)
    }
  }

  const editTodo = async (editedTodo) => {
    if (editedTodo.task.length) {
      try {
        const id = editedTodo.id
        await todoServices
          .updateTodo(id, editedTodo)
          .then(response => {
            setTodos(todos.map(todo => todo.id === id ? response : todo))
          })
      } catch (error) {
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
