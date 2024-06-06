// const { sequelize } = require('../connection.js')
// const { DataTypes } = require('sequelize');

// const users = sequelize.define(
//   'users',
//   {
//     id: {
//       type: DataTypes.TINYINT,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     username: {
//       type: DataTypes.STRING,
//     },
//     email: {
//       type: DataTypes.STRING,
//     },
//     password: {
//       type: DataTypes.TEXT,
//     },
//   },
//   {
//     tableName: 'users',
//     timestamps: false,

//   }
// )
// async function get_users_table() {
//   await users.sync()
//   console.log('синхр ок');
// }

// module.exports = { users, get_users_table }
