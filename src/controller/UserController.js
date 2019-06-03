const User = require("../models/User");

module.exports = {
    async index(req, res) {
        try {
            const users = await User.find({}).sort("-createAt");
            return res.json(users);
        } catch (err) {
            console.log(err);
        }
    },
    async store(req, res) {
        try {
            const user = await User.create(req.body);

            // req.io.emit('recado', recado)

            return res.json(user);
        } catch (err) {}
    },
    async getById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            return res.json(user);
        } catch (err) {
            console.log(err);
        }
    },
    async updateUser(req, res) {
        try {
        } catch (err) {}
    }
};
