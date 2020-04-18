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
};
