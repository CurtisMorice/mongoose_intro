const mongoose = require('mongoose');
const Schema = mongoose.Schema; // sets up "Schema" so I dont have to type mongoose.Schema everytime. 

const bookSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    published: { type: Date }
});

module.exports = mongoose.model('book', bookSchema);