import EditTodo from './EditTodo';
import ToggleStatus from './ToggleStatus';

const ListTodos = ({ todos, editTodo, deleteTodo }) => {
  return (
      <table className="table table-striped mt-5">
        <tbody className="mt-3">
          {todos.map((todo) => {
            if (!todo.status) {
               return (
                  <tr key={todo.id}>
                    <td><ToggleStatus todo={todo} editTodo={editTodo}/></td>
                    <td>{todo.task}</td>
                    <td>{todo.status ? 'Completed' : 'Ongoing'}</td>
                    <td><EditTodo todo={todo} editTodo={editTodo} /></td>
                    <td>
                      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
              )
            } else {
              return null
            }
          })}
        </tbody>
        <tbody className="mt-3">
          {todos.map((todo) => {
            if (todo.status) {
              return (
                <tr className="linethrough-row" key={todo.id}>
                  <td><ToggleStatus todo={todo} editTodo={editTodo}/></td>
                  <td>{todo.task}</td>
                  <td>{todo.status ? 'Completed' : 'Ongoing'}</td>
                  <td><EditTodo todo={todo} editTodo={editTodo} /></td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            } else {
              return null
            }
          })}
        </tbody>
      </table>
  )
}

export default ListTodos;
