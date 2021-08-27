const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Team = new Schema({
    category_id: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    role: {
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
    location: {
        type: String,
        require: true
    },
    TechnicianId: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model("technicians", Team);
