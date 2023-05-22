import { useState } from 'react'

const ToggleStatus = ({ todo, editTodo }) => {
  const [isChecked, setIsChecked] = useState(todo.status)

  const toggle = () => {
    setIsChecked(!isChecked)
    editTodo({...todo, status: !todo.status})
  }

  return (
    <div className="form-check">
      <input
        className="form-check-input rounded-circle"
        type="checkbox"
        checked={isChecked}
        onChange={toggle}
        id="toggleCheckbox"
      />
    </div>
  )
}

export default ToggleStatus
