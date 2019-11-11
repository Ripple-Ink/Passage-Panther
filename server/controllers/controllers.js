const db = require("../models/models.js");
const controller = {};
const path = require("path");

controller.getAllTitles = (req, res, next) => {
  const text =
    "SELECT _id, title, author, FROM passages WHERE parent = null";
  db.query(text)
    .then(result => {
      return res.status(200).json(result.rows);
    })
    .catch(err => {
      return next({ err });
    });
};

controller.getPassage = (req, res, next) => {
  const id = req.params.id;
  const text = `SELECT * from passages WHERE _id = ${id}`;
  db.query(text).then(result => {
    return res.status(200).json(result.rows);
  });
};

controller.createAccount = (req, res, next) => {
    const {username, password, firstName, lastName, email} = req.body; 
    if (!username || !password || !firstName || !lastName || !email) { 
        return res.json({message: "Please make sure the form is completely filled out!"})
    }

    const text = 'INSERT INTO logininfo (username, password, firstname, lastname, email) VALUES ($1, $2, $3, $4, $5)'
    const values = [username, password, firstName, lastName, email];
    

    db.query(text, values, (err, result) => {
        if (!err) {  
            return res.status(200).json(result)
        } else { 
            return next(err);
        }
    })
    }

    controller.checkLogin = (req, res, next) => {
        const {username, password } = req.body
        if (!username || !password) { 
            return res.json({message: "please enter a username or password!"})
        }


  db.query(text, values, (err, result) => {
    if (!err) {
      return res.status(200).json(result);
    } else {
      return next(err);
    }
  });
};

controller.checkLogin = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ message: "please enter a username or password!" });
  }
  const text = `SELECT username, password FROM logininfo WHERE username = '${username}' AND password = '${password}'`;
  db.query(text)
    .then(result => {
      if (
        result.rows[0].username !== username || result.rows[0].password !== password) {
        res.status(400).json({ message: "Please enter valid username or passward" });
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      return next(err);
    });
};

controller.createNewRow = (req, res, next) => {
  const {title, author, parent, child1, child2, path1, path2} = req.body;
    let text = `INSERT INTO passages (title, author, parent, child1, child2, path1, path2)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `
    const values = [title, author, parent, child1, child2, path1, path2];

    db.query(text)
    .then( resp =>  next() )

};

controller.getLatestId = (req, res, next) => {
  const text = `SELECT MAX(_id) FROM passages`
  db.query(text)
  .then(result => {
    res.locals.lastRow = result.rows[0].max;
    return next();
  })
}

  controller.updatePassages = (req, res, next) => {
    const { childId } = req.body
    let text;
    if (childId === 1) { 
      text = `UPDATE passages SET child1 = ${res.locals.lastRow } WHERE _id = ${parent}`
    }
  
    if (childId === 2) { 
      text = `UPDATE passages SET child2 = ${res.locals.lastRow } WHERE _id = ${parent}`
    }
    db.query(text3)
  }



module.exports = controller;
