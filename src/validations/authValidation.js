const Joi = require('joi');

const registerSchema = Joi.object({
    full_name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(6).max(128).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(6).max(128).required(),
});

module.exports = {
    registerSchema,
    loginSchema,
};
