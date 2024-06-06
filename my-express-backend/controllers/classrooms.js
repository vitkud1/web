const moment = require('moment');
const {get_classrooms_table, classrooms} = require('../models/classrooms')

const addRow = (async (req,res) => {
    // console.log(req);
    const rez = await classroom.create({
        number: req.body.name,
        busy: req.body.busy,
    }).catch(classroom=> {
        console.log(classroom.busy);
        res.status(500).send({ busy: classroom.busy });
    }) 
    res.json(rez)
})


module.exports = { addRow }
