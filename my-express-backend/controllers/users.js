const moment = require('moment');
const {get_users_table, users} = require('../models/users')

const addRow = async (req,res) => {
    // console.log(req);
    const rez = await users.create({
        name: req.body.name,
        surname: req.body.surname,
    }).catch(user=> {
        console.log(user.surname);
        res.status(500).send({ surname: user.surname });
    }) 
    res.json(rez)
};
module.exports = { addRow };

// Получение всех пользователей
const getAllUsers = async (req, res) => {
    try {
      const allUsers = await users.findAll();
      res.json(allUsers);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ error: error.message });
    }
    res.json(rez)

  };
  
  module.exports = { getAllUsers };