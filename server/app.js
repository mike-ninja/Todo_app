const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const pool = require('./db_config/db')
const todoRoutes = require('./routes/todoRoutes')

morgan.token('body', (request, response) => JSON.stringify(request.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors());
app.use(express.json())

app.use('/todo', todoRoutes)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Backend server running on ${PORT}`)
})
