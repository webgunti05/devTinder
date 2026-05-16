const mongoose = require("mongoose");

const connectDb = async() => {
    await mongoose.connect("mongodb+srv://geethikagunti02_db_user:rmKb0RmbzUiy0zsr@bepractice.3f1dr2l.mongodb.net/HelloNode", {
        family:4
    });
}

module.exports = connectDb;
