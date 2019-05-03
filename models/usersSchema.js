const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    department: String, enum: ["IT", "Management", "HR"],
    position: String, enum: ["entry-level", "middle management", "executive"],
    //id: ObjectId
})

const User = mongoose.model('User', userSchema) 

module.exports = User;