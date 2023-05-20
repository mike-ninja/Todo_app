import EditTodo from './EditTodo';
import ToggleStatus from './ToggleStatus';

const ListTodos = ({ todos, editTodo, deleteTodo }) => {
  return (
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Task</th>
            <th scope="col">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td><ToggleStatus todo={todo} editTodo={editTodo}/></td>
                <td>{todo.task}</td>
                <td>{todo.status ? 'Completed' : 'Ongoing'}</td>
                <td>{todo.due_date}</td>
                <td>
                  <EditTodo todo={todo} editTodo={editTodo} />
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  )
}

export default ListTodos;
