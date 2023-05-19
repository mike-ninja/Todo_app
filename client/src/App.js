// import Header from './components/Header'
// import EditTodo from './components/EditTodo'
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <InputTodo />
      <ListTodos />
    </div>
  )
}

export default App;
