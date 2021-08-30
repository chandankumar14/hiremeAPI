const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Technician = new Schema({
    category_id: {
        type: Number,
        require: true,
    },
    Firstname: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    phoneNo: {
        type: Number,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    skill: {
        type: String,
        require: true,
    },
    experience: {
        type: String,
        require: true,
    },
    min_price: {
        type: Number,
        require: true,
    },
    permanentAddress: {
        type: String,
        require: true,
    },
    currentAddress: {
        type: String,
        require: true,
    },
    location_id: {
        type: Number,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    zipcode: {
        type: Number,
        require: true,
    },

});

module.exports = mongoose.model("technicians", Technician);
