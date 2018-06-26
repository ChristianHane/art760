const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const businessRouter = require('./routes/BusinessRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./client/build'));

app.use(businessRouter);

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/art760');

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
})
