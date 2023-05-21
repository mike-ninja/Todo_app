import { useState } from 'react'

const InputTodo = ({ addTodo }) => {
  const [task, setTask] = useState('')


  const onSubmitForm = (event) => {
    event.preventDefault()
    const newTodo = {
      task: task,
      status: false,
    }
    addTodo(newTodo)
    setTask('')
  }

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  return (
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="add task"
        className="form-control"
        value={task}
        onChange={handleChange}
      />
      <button className="btn btn-success">Add</button>
    </form>
  )
}

export default InputTodo
