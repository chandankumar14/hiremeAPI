const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Categories = new Schema({
    category_id: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },

    image: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("categories", Categories);
