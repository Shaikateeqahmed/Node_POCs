const express = require('express');
const BookModel = require('../Models/bookModel');
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/bookController');

const books = express.Router();

books.get('/', getAllBooks);

books.get('/:id', getBookById);

books.post('/create', createBook);

books.patch('/update/:id', updateBook);

books.delete('/delete/:id', deleteBook);

module.exports = books;