const jwt = require("jsonwebtoken");

module.exports = {
    async verifyValidToken(req, res, next) {
        console.log(req.headers);
        const token = req.headers.authorization;
        console.log(token);
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            console.log(decoded);
            if (err) {
                console.log(err.message);
                return res.status(401).send({ Error: "Sem autorização" });
            } else next();
        });
    },
};
