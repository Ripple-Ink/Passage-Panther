const db = require('../models/models.js');
const controller = {};
const path = require('path');

controller.getAllTitles = (req, res, next) => { 
    const text = 'SELECT _id, title, author, summary FROM passages'
    db.query(text)
    .then(result => {
        return res.status(200).json(result.rows)
    })
    .catch(err => {
        return next({err})
    })
}

controller.getPassage = (req, res, next) => {
    const id = req.params.id;
    const text = `SELECT * from passages WHERE _id = ${id}`;

    db.query(text)
    .then(result => {
         return res.status(200).json(result.rows)
    })
}


controller.createAccount = (req, res, next) => {
    const {username, password} = req.body; 
    const text = 'INSERT INTO logininfo (username, password) VALUES ($1, $2)'
    const values = [username, password];
    //Need to check if the req body username !== username. Need to find out whaat the result object

    db.query(text, values, (err, result) => {
        if (!values[0] || !values[1]) { 
            return res.json({message: "please enter a username or password!"})
        } else { 
            return res.status(200).json(result)
        }
    })
}


module.exports = controller;