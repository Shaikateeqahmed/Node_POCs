const BookModel = require('../Models/bookModel');

const getAllBooks = async(req, res) => {
    try {
        const books = await BookModel.scan().exec();
        res.json(books);
    } catch (error) {
        res.status(500).send('Error fetching books');
    }
};
const getBookById = async(req, res) => {
    try {
        const { id } = req.params;
        const book = await BookModel.get({ id });
        if (book) {
            res.json(book);
        } else {
            res.status(404).send('Book not found');
        }
    } catch (error) {
        res.status(500).send('Error fetching book');
    }
};
const createBook = async(req, res) => {
    try {
        const book = new BookModel(req.body);
        await book.save();
        res.status(201).json("Book Added Successfully");
    } catch (error) {
        res.status(500).send('Error creating book');
    }
};
const updateBook = async(req, res) => {
    try {
        const { id } = req.params;
        await BookModel.update({ id }, req.body);
        res.status(200).json(`Book with id ${id} updated successfully`);
    } catch (error) {
        res.status(500).send('Error updating book');
    }
};
const deleteBook =async(req, res) => {
    try {
        const { id } = req.params;
        await BookModel.delete({ id });
        res.status(200).json(`Book with id ${id} deleted successfully`);
    } catch (error) {
        res.status(500).send('Error deleting book');
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};