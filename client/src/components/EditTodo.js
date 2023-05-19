import { Fragment, useState } from 'react'
import todoService from '../services/todo'

const EditTodo = ({ todo }) => {
  const [task, setTask] = useState(todo.task)

  const inputHandler = (event) => {
    setTask(event.target.value)
  }

  const editTask = async (id) => {
    try {
      const body = {...todo, task: task}
      todoService
        .updateTodo(id, body)
        .then(data => {
          console.log(data)
        })
      // window.location = "/"
    } catch (error) {
      console.log(error.message)
    }
  } 

  return (
    <Fragment>
      <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.id}`}>
        Edit
      </button>

      <div className="modal fade" id={`id${todo.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => setTask(todo.task)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setTask(todo.task)}></button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" value={task} onChange={inputHandler}>

              </input>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setTask(todo.task)}>Close</button>
              <button type="button" className="btn btn-warning" onClick={() => editTask(todo.id)}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditTodo
