const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Customer = new Schema({
    FirstName: {
        type: String,
        require: true,
    },
    LasName: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        require: true,
    },
    Password: {
        type: String,
        require: true,
    },
    Address: {
        type: String,
        require: true,
    },
    Address_2: {
        type: String,
        require: true,
    },
    City: {
        type: String,
        require: true,
    },
    State: {
        type: String,
        require: true,
    },
    Zip: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("customer", Customer);
