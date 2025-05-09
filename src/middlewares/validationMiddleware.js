module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const details = error.details.map(d => d.message);
            return res.status(400).json({ errors: details });
        }
        next();
    };
};
