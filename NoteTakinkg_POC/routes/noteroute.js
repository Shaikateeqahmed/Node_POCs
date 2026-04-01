const express = require('express');
const { getNotes, createNote, updateNote, deleteNote } = require('../controllers/noteController');

const note = express.Router();

note.get('/', getNotes);

note.post('/create', createNote);

note.patch("/update/:id",updateNote)

note.delete("/delete/:id",deleteNote)

module.exports = note;