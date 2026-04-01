const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title : String,
    note: String,
    category: String
});

const NoteModel = mongoose.model('Note', noteSchema);

module.exports = NoteModel;