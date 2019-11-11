const db = require("../models/models.js");
const controller = {};
const path = require("path");

controller.getAllTitles = (req, res, next) => {
  const text =
    "SELECT _id, title, author, summary FROM passages WHERE parent = 0";
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
  const { username, password, firstname, lastname, email } = req.body;
  if (!username || !password || !firstname || !lastname || !email) {
    return res.json({
      message: "Please make sure the form is completely filled out!"
    });
  }
  const text =
    "INSERT INTO logininfo (username, password, firstname, lastname, email) VALUES ($1, $2, $3, $4, $5)";
  const values = [username, password, firstname, lastname, email];

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
        result.rows[0].username !== username ||
        result.rows[0].password !== password
      ) {
        res
          .status(400)
          .json({ message: "Please enter valid username or passward" });
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      return next(err);
    });
};
controller.createNewRow = (req, res, next) => {
  const text = `INSERT INTO passages (title, author, content, genre, parent, child1, child2, summary, path1, path2) 
        SELECT title, author, content, genre, parent ,child1, child2, summary, path1, path2  FROM passages WHERE `;
};
module.exports = controller;
