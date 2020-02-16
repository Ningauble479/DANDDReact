const mongoose = require("mongoose");
Schema = mongoose.Schema


const userSets = new Schema({
    email: String,
    characters: Array
});




module.exports = mongoose.model("userSets", userSets);