const AuthService = require('../services/authService');

exports.register = async (req, res, next) => {
    try {
        const user = await AuthService.register(req.body);
        res.status(201).json({
            message: 'User registered successfully',
            user: { id: user._id, email: user.email, full_name: user.full_name }
        });
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const token = await AuthService.login(req.body);
        res.json({ token });
    } catch (err) {
        next(err);
    }
};