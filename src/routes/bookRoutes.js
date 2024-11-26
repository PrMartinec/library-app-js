import express from 'express';
import * as bookController from '../controllers/bookController.js';

const router = express.Router();

router.get('/', bookController.getBooks);
router.post('/add', bookController.addBook);

export default router;