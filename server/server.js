const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dataController = require('./controllers/controllers.js')

const app = express();
const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use(bodyParser.json());



app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/getTitles', dataController.getAllTitles);
app.get('/getPassage/:id', dataController.getPassage);
app.post('/createAccount', dataController.createAccount);

app.use('*', (req, res) => {
	res.status(404).send("not found")
})

app.use((err, req, res, next) => {
	console.log(err)
	res.status(500).send("internal server error")
})
app.listen(PORT, ()=>{console.log(`server running on ${PORT}`)})

module.exports = app;