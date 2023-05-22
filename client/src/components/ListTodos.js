import EditTodo from './EditTodo'
import ToggleStatus from './ToggleStatus'

const ListTodos = ({ todos, editTodo, deleteTodo }) => {
  const sortedTodos = [...todos].sort((a, b) => a.status - b.status)

  return (
    <table className="table table-striped mt-5">
      <tbody className="mt-3">
        {sortedTodos.map((todo) => (
          <tr className={todo.status ? 'linethrough-row' : ''} 
            key={todo.id}>
            <td>
              <ToggleStatus todo={todo} editTodo={editTodo} />
            </td>
            <td>
              {todo.task}
            </td>
            <td>
              <EditTodo todo={todo} editTodo={editTodo} />
            </td>
            <td>
              <button 
                className="btn btn-danger" 
                onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ListTodos
