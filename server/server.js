const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();
const PORT = 3000;



app.listen(PORT, ()=>{console.log(`server running on ${PORT}`)})
module.exports = app;