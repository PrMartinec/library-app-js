import { ValidationError } from '../exceptions/ValidationError.js';
import Book from '../models/bookModel.js';

export const findAllBooks = async () => {
    return await Book.find({});
};

export const addBook = async (req) => {
    const uniqueCheck = await Book.exists({ title: req.title});
    if(uniqueCheck){
        throw new ValidationError("Title already exists!");
    }
    const data = {
        title: req.title,
        description: req.description,
    }
    const newBook = new Book(data);
    return await newBook.save();
};