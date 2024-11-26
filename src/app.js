import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import connectDB from "./utils/mongooseUtil.js";

const app = express();

app.use(express.json()); // For JSON parsing

app.use('/books', bookRoutes);

connectDB();

export default app;