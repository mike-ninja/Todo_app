import axios from 'axios'
const baseUrl = '/api/todos'

const todoServices = {
  getAllTodo: () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  },
  createTodo: (newTodo) => {
    const request = axios.post(baseUrl, newTodo)
    return request.then(response => response.data)
  },
  getTodo: (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  },
  updateTodo: (id, updatedTodo) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedTodo)
    return request.then(response => response.data)
  },
  deleteTodo: (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }
}

export default todoServices;
