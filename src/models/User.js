const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: String,
        login: String,
        email: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
