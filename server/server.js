const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dataController = require('./controllers/controllers.js');

const app = express();
const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get('/getTitles', dataController.getAllTitles, (req, res) => {
  res.status(200).json({ allTitles: res.locals.allTitles});
});

app.get('/getPassage/:id', dataController.getPassage, (req, res) => {
  res.status(200).json({message: "successful!"})
});
  
app.post('/signup', dataController.createAccount, (req, res) => {
  res.status(200).json({message: "successful!"})
});

app.post('/login', dataController.checkLogin,(req, res) => {
  res.status(200).json({message: "successful!"})
});

app.post('/uploadPassage', dataController.createNewRow, dataController.getLatestId, dataController.updatePassages, (req, res) => {
  res.status(200).json({childId: res.locals.lastRow});
});

// Error Handling -------------------------------------
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Internal Server Error");
});

// Start up Server ------------------------------------

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

module.exports = app;
