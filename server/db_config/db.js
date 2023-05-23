// Configuration for connecting to the database.
// const Pool = require("pg").Pool
//
// const pool = new Pool({
//   user: "postgres",
//   password: "",
//   host: "localhost",
//   database: "todo_mike",
//   port: 5432,
// })

// module.exports = pool
const { Client } = require('pg')

const client = new Client({connectionString: process.env.DATABASE_URL})

client.connect()

module.exports = client
