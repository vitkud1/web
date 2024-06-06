const { sequelize } = require('../connection.js')
const { DataTypes } = require('sequelize');

const classrooms = sequelize.define(
  'classrooms',
  {
    id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      autoIncrement: true,
    },
    number: {
      type: DataTypes.INTEGER,
    },
    busy: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: 'classrooms',
    timestamps: false,

  }
)
async function get_classrooms_table() {
  await classrooms.sync()
  console.log('синхр ок');
}

module.exports = { classrooms, get_classrooms_table }
