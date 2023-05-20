import { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos'
import todoServices from './services/todo'

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
          console.log(fetchedTodos)
          setTodos(fetchedTodos)
        })
    } catch (error) {
      console.log(`Failed to fetch todos: ${error}`)
    }
  }

  const addTodo = async (newTodo) => {
    try {
      await todoServices
        .createTodo(newTodo)
        .then(createdTodo => {
          console.log(createdTodo)
          setTodos(todos.concat(createdTodo))
        })
    } catch (error) {
      console.log(`Failed to create todo: ${error}`)
    }
  }

  const deleteTodo = async (id) => {
    try {
      await todoServices
        .deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(`Failed to delete todo: ${error}`);
    }
  }

  const editTodo = async (todo, task, status) => {
    try {
      const id = todo.id
      const body = {...todo, task: task, status: status}
      todoServices
        .updateTodo(todo.id, body)
        .then(updatedTodo => {
          console.log(updatedTodo)
          setTodos(todos.map(todo => todo.id === id ? body : todo))
        })
    } catch (error) {
      console.log(error.message)
    }
  } 

  return (
    <div className="container">
      <h1>Todo list</h1>
      <AddTodo addTodo={addTodo} />
      <ListTodos todos={todos} editTodo={editTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
