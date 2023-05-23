import axios from 'axios'
const baseUrl = '/api/todos'

const getAllTodo = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createTodo = (newTodo) => {
  const request = axios.post(baseUrl, newTodo)
  return request.then(response => response.data)
}

const getTodo = (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const updateTodo = (id, updatedTodo) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedTodo)
  return request.then(response => response.data)
}

const deleteTodo = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default {
  getAllTodo,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo
}
