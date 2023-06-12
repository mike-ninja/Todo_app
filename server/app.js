const express = require('express')
const app = express()

const cors = require('cors')
const morgan = require('morgan')
const todoRoutes = require('./routes/todoRoutes')

morgan.token('body', (request, response) => JSON.stringify(request.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors());
app.use(express.json())
app.use(express.static('build'))

app.use('/api/todos', todoRoutes)

module.exports = app
