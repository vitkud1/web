const moment = require('moment');
const {get_users_table, users} = require('../models/users')

const addRow = async (req,res) => {
    // console.log(req);
    const rez = await users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }).catch(user=> {
        console.log(user.username);
        res.status(500).send({ username: user.username });
    }) 
    res.json(rez)
};
module.exports = { addRow };

// Получение всех пользователей
// const getAllUsers = async (req, res) => {
//     try {
//       const allUsers = await users.findAll();
//       res.json(allUsers);
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).send({ error: error.message });
//     }
//     res.json(rez)

//   };
  
//   module.exports = { getAllUsers };