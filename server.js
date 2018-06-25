const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const businessRouter = require('./routes/BusinessRouter');

const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./client/build'));

app.use(businessRouter);

db.Business.create({ name: 'business', streetAddress: '1234 business st', zipCode: '92201', phone: '760-487-2222', website: 'business.com', category: ['art'] });

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/art760');

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
})
