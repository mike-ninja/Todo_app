// Configuration for connecting to the database.
const Pool = require("pg").Pool

const pool = new Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  database: "todo_db",
  port: 5432,
})

module.exports = pool
