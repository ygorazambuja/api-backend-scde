const User = require("../models/User");

module.exports = {
    async index(req, res) {
        try {
            const users = await User.find({}).sort("-createAt");
            return res.json(users);
        } catch (err) {}
    },
    async store(req, res) {
        const { username, email, password, confirmPassword } = req.body;

        try {
            if (!(password === confirmPassword)) {
                return res.status(401).send({ Error: "Senhas Não Coincidem" });
            }
            let user = await User.findOne({ username });
            if (user)
                return res.status(401).send({ Error: "Usuario ja Existe" });

            user = undefined;
            user = await User.findOne({ email });
            if (user) return res.status(401).send({ Error: "Email ja existe" });

            const usuario = await User.create({ username, email, password });
            usuario.password = undefined;
            return res.status(200).send(usuario);
        } catch (error) {
            return res.status(500).send({ error: "Algum pau loco" });
        }
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
