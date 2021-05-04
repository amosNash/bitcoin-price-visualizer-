const express = require('express');
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const controllers = require('./controllers/index.js');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));


app.get('/closingPrice', controllers.getBitcoinData);


app.listen(port, ()=> {
  console.log(`Listening on port ${port}`)
})

