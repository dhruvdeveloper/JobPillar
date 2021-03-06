var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Schema
var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    hname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('users', UserSchema);