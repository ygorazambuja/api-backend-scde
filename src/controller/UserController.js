const User = require("../models/User");

module.exports = {
    async index(req, res) {
        try {
            const users = await User.find({}).sort("-createAt");
            return res.json(users);
        } catch (err) {}
    },

    async getById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            return res.json(user);
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    async deleteUserById(req, res) {
        const { id } = req.params;

        try {
            const user = await User.findOneAndDelete({ _id: id });
            if (!user) {
                return res
                    .status(500)
                    .send({ Error: "Usuario não existe no banco" });
            }
            return res.status(200).send(user);
        } catch (error) {
            return res.send(error);
        }
    },
};
