import EditTodo from './EditTodo';

const ListTodos = ({ todos }) => {
  return (
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.task}</td>
                <td>{todo.status ? 'Completed' : 'Ongoing'}</td>
                <td>{todo.due_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  )
}
                // <td>
                //   <EditTodo todo={todo} />
                // </td>
                // <td>
                //   <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
                //     Delete
                //   </button>
                // </td>

export default ListTodos;
