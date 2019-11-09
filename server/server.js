const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use(bodyParser());


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/getTitles', (req, res) => {});

app.listen(PORT, ()=>{console.log(`server running on ${PORT}`)})

module.exports = app;