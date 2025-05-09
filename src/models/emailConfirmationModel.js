const mongoose = require('mongoose');

const emailConfirmationSchema = new mongoose.Schema({
    enrollment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment', required: true
    },
    status: {
        type: String,
        enum: ['sent', 'failed'],
        required: true
    },
}, { timestamps: { createdAt: 'sent_at', updatedAt: false } });

module.exports = mongoose.model('EmailConfirmation', emailConfirmationSchema);