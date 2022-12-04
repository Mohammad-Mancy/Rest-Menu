const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const { getByEmail } = require('./service')

async function login(req, res) {
    try {
        const user = await getByEmail(req.body.email);
        if (!user) return res.status(400).send('invalid credentials');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('invalid credentials');

        // generate new auth token
        const token = jwt.sign(
        {_id: user._id, name: user.name, email: user.email},
        TOKEN_SECRET
        );

        return res.header('auth-token', token).send({token});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {
    login
}