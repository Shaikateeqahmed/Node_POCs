const TodoModel = require('../models/todoModel');

const getAllTodos = async (req, res) => {
     try {
        const notes = await TodoModel.scan().exec();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await TodoModel.get({ id });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTodo = async (req, res) => {
    try {
        const todo = new TodoModel(req.body);
        await todo.save();
        res.status(201).json("Todo created successfully");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateTodo = async (req, res) =>{
    try {
        const { id } = req.params;
        const updatedTodo = await TodoModel.update({ id }, req.body);
        res.status(200).json(`Todo with ID ${id} updated successfully`);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteTodo = async (req, res) =>{
    try {
        const { id } = req.params;
        await TodoModel.delete({ id });
        res.status(200).json(`Todo with ID ${id} deleted successfully`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}