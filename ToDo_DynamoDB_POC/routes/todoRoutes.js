const express = require('express');
const { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');

const todo = express.Router();

// Define your routes here
todo.get('/', getAllTodos);

todo.get('/:id', getTodoById);

todo.post('/create', createTodo);

todo.patch('/update/:id', updateTodo);

todo.delete('/delete/:id', deleteTodo);

module.exports = todo;