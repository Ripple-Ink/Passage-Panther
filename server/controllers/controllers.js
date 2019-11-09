const db = require('../models/models.js');
const controller = {};
const path = require('path');

controller.getAllTitles = (req, res, next) => { 
    const text = 'SELECT _id, title, author, summary FROM passages'
    db.query(text)
    .then(data => data.json())
    .then(result => {
        console.log("SENDING BACK DATA FROM GETALLTITLES>>>>>>", result)
        return res.status(200).json({result})
    })
    .catch(err => {
        return next({err})
    })
}

controller.getPassage = (req, res, next) => {
    const text = 'SELECT * from passages'
    const {_id} = req.params._id;

    db.query(text)
    .then(data => data.json())
    .then(result => { 
        console.log(result) //probably need a conditional to check if the _ids matches, but not sure what the result object looks like.
        return res.status(200).json({result})
        })
    .catch(err  => {
        return next({err})
    })
}

controller.createAccount = (req, res, next) => {
    const {username, password} = req.body; 
    const text = 'INSERT INTO logininfo (username, password) VALUES ($1, $2)'
    const values = [username, password];

    db.query(text, values, (err, result) => {
        if (!values[0] || !values[1]) { 
            
        }
    })
}


module.exports = controller;