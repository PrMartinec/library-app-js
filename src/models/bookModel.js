import mongoose from 'mongoose';

const bookShema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Book', bookShema);