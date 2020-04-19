const User = require("../models/User");
const jwt = require("jsonwebtoken");

function generateToken(params = {}) {
    return jwt.sign({ params }, process.env.SECRET, {
        expiresIn: 86400,
    });
}

module.exports = {
    async authenticateUser(request, response) {
        const { username, password } = request.body;
        try {
            const user = await User.findOne({ username }).select("+password");
            if (!user) {
                return response.status(400).send({ error: "User not Found" });
            }
            if (!(user.password === password)) {
                return response
                    .status(400)
                    .send({ error: "Passwords dont match" });
            }
            user.password = undefined;
            response.send({ user, token: generateToken({ id: user.id }) });
        } catch (err) {}
    },

    async store(req, res) {
        const { username, email, password, confirmPassword } = req.body;

        try {
            if (!confirmPassword)
                return res
                    .status(401)
                    .send({ Error: "Sem senha de confirmação" });

            if (!email)
                return res.status(401).send({ Error: "Sem email Valido" });
            if (!(password === confirmPassword))
                return res.status(401).send({ Error: "Senhas Não Coincidem" });

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
};
