const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    endpoint: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    status_code: {
        type: Number,
        required: true
    },
    message: {
        type: String, default: ''
    },
}, {
    timestamps: {
        createdAt: 'created_at', updatedAt: false
    }
});

module.exports = mongoose.model('ApiLog', logSchema);