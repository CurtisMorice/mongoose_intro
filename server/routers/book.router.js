const express = require('express');
const router = express.Router();

const Book = require('../modules/models/books.schema');

router.get('/', (req, res) => {
    Book.find({})
        .then((data) => {
            //We got Stuff back from the database no error
            console.log(`Got stuff back from mongo: ${data}`);
            res.send(data);
        })
        .catch((error) => {
            console.log(`this is my:'${error}`);
            res.sendStatus(500);

        });

});

router.post('/', (req, res) => {
    let bookData = req.body;
    console.log(`Got the book data from request: ${bookData}`);
    let newBook = new Book(bookData);
    console.log(`New book is ${bookData}`);
    newBook.save();
    res.sendStatus(201);
});

module.exports = router;