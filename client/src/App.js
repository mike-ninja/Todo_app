import { useEffect, useState } from 'react'
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
      console.log(`Failed to fetch todos ${error}`)
    }
  }

  return (
    <div className="container">
      <h1>Todo list</h1>
      <ListTodos todos={todos} />
    </div>
  )
}

export default App;
