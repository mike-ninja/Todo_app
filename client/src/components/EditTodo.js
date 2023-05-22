import { useState } from 'react'

const EditTodo = ({ todo, editTodo }) => {
  const [task, setTask] = useState(todo.task)
  
  const inputHandler = (event) => {
    setTask(event.target.value)
  }
  
  const onSaveChanges = () => {
    editTodo({...todo, task: task})
  }

  return (
      <div>
        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target={`#id${todo.id}`}>Edit</button>
        <div
          className="modal fade"
          id={`id${todo.id}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          onClick={() => setTask(todo.task)}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" 
                    id="exampleModalLabel">Edit Todo
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setTask(todo.task)}>
                  </button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    value={task}
                    onChange={inputHandler}>
                  </input>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-warning"
                    data-bs-dismiss="modal"
                    onClick={onSaveChanges}>Save changes
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}

export default EditTodo
