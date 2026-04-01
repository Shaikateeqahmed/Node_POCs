const mongoose = require('mongoose');

const connectDB = mongoose.connect("mongodb+srv://ShaikAteeqAhmed:shaik@cluster0.yyxbopz.mongodb.net/NoteTaking?appName=Cluster0");

module.exports = connectDB;