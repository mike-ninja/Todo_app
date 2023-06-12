const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
  database: "todo_db",
  username: "postgres",
  password: "",
  host: "localhost",
  dialect: "postgres"
})

module.exports = sequelize
