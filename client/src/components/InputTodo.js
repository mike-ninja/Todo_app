import { Fragment, useState } from 'react'
import todoServices from '../services/todo'

const InputTodo = () => {
  const [task, setTask] = useState('')

  const inputHandler = (event) => {
    setTask(event.target.value)
  }

  const onSubmitForm = async (event) => {
    event.preventDefault()
    try {
      const currentDate = new Date().toISOString()
      const newTodo = {
        task: task,
        status: false,
        due_date: currentDate
      }
      console.log(newTodo)
      todoServices
        .createTodo(newTodo)
    } catch (error) {
      console.log(error.message) 
    }
  }

  return (
    <Fragment>
      <h2 className="text-center my-5">Input Todo</h2>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input type="text" placeholder="add task" className="form-control" onChange={inputHandler}/>
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}

export default InputTodo
