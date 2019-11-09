const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const dataController = require('./controllers/controllers.js');

	//
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use(bodyParser());


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/getTitles',
	dataController.getAllTitles,
	(req, res) => {});

app.get('/getPassage/:id',
	dataController.getPassage, 
	(req, res) => {});

app.post('/newPassage', (req, res) => {});

	// Error Handling -------------------------------------
app.use('*', (req, res) => {
	res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send('Internal Server Error');
});

	// Start up Server ------------------------------------
app.listen(PORT, ()=>{console.log(`server running on ${PORT}`)})

module.exports = app;