const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const authorSchema = new mongoose.Schema({
name: {type: String, required: true, minlength: [3, "you need at least 3 characters!"]}
}, {timestamps: true});
mongoose.model('Author', authorSchema)

// const authorSchema = new mongoose.Schema({
//     name: {type: String, required: true, minlength: [3, "you need at least 3 characters!"]},
//     _quotes: [{type: String, minlength: [6, "your quote must be more than 6 characters!"]}]
//     }, {timestamps: true});
//     mongoose.model('Author', authorSchema)