import { useState } from 'react'

const ToggleStatus = ({ todo, editTodo }) => {
  const [isChecked, setIsChecked] = useState(todo.status);

  const toggle = () => {
    setIsChecked(!isChecked);
    editTodo(todo, todo.task, !todo.status)
  }

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={isChecked}
        onChange={toggle}
        id="toggleCheckbox"
      />
      <label className="form-check-label" htmlFor="toggleCheckbox">
      </label>
    </div>
  )
}

export default ToggleStatus
