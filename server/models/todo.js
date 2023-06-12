const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  task: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'todo',
  timestamps: true,
  createdAt: 'createdat',
  updatedAt: 'updatedat'
})

module.exports = Todo
