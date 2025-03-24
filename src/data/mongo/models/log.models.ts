import mongoose from 'mongoose';

const logSechema = new mongoose.Schema({
    level: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low',
    },
    message: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

export const Log = mongoose.model('Log', logSechema);