import { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo';
import todoService from '../services/todo';

const ListTodos = ({ todos }) => {
  const [todos, setTodos] = useState([]);

  async function deleteTodo(id) {
    try {
      await todoService.deleteTodo(id); // Wait for deletion to complete
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(`Failed to delete todo: ${error}`);
    }
  }

  async function getTodos() {
    try {
      const todoArray = await todoService.getAllTodo(); // Wait for todos to be fetched
      setTodos(todoArray);
    } catch (error) {
      console.log(`Failed to fetch todos: ${error}`);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
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
                <td>
                  <EditTodo todo={todo} />
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
    </Fragment>
  );
};

export default ListTodos;
