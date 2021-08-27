const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Team = new Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    Role: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("Teams", Team);
