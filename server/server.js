const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

//require in our mongoose data base


//connect to mongodb
const mongoose = require('mongoose');
const DATABASE_NAME = 'library';

const DATABASE_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;

mongoose.connect(DATABASE_URL);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected to ${DATABASE_URL}`);
});

mongoose.connection.on('error', (error) => {
    console.log(`Mongoose is connection error: ${error}`);
});


//-------End of Mongo Connection Stuff
const bookRouter = require('./routers/book.router');
app.use('/book', bookRouter);

app.listen(PORT, (req, res) => {

    console.log('listening on port', PORT);
});