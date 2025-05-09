const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiresIn } = require('../config/jwt');

class AuthService {
    static async register({ full_name, email, password }) {
        const existing = await User.findOne({ email });
        if (existing) {
            const err = new Error('Email already in use');
            err.status = 409;
            throw err;
        }

        const password_hash = await bcrypt.hash(password, 10);
        const user = await User.create({ full_name, email, password_hash });
        return user;
    }

    static async login({ email, password }) {
        const user = await User.findOne({ email });
        if (!user) {
            const err = new Error('Invalid email or password');
            err.status = 401;
            throw err;
        }

        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
            const err = new Error('Invalid email or password');
            err.status = 401;
            throw err;
        }

        const payload = { id: user._id, role: user.role };
        const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
        return token;
    }
}

module.exports = AuthService;