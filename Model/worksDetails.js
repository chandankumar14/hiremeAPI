const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Team = new Schema({
    id: {
        type: String,
        require: true,
    },
    customerName: {
        type: String,
        require: true,
    },
    TechniciansName: {
        type: String,
        require: true,
    },
    technicianId: {
        type: String,
        require: true,
    },
    charge: {
        type: String,
        require: true,
    },
    Date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("workDetails", Team);
