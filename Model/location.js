const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Location = new Schema({
    country_name: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        require: true,
    },
    state_code: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("location", Location);
