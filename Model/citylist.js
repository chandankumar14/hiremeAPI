const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Citylist = new Schema({
    city_name: {
        type: String,
        require: true,
    },
    location_id: {
        type: Number,
        require: true,
    },
    state_code: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("citylist", Citylist);
