const FeedbackModel = require('../models/feedbackModel');

const getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await FeedbackModel.scan().exec();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getFeedbackById = async (req, res) => {
    try {
        const { id } = req.params;
        const feedback = await FeedbackModel.get(id);
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createFeedback = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newFeedback = new FeedbackModel({ name, email, message });
        await newFeedback.save();
        res.status(201).json("Feedback created successfully");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, message } = req.body;
        await FeedbackModel.update(id, { name, email, message });
        res.status(200).json(`Feedback with ID ${id} updated successfully`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateFeedbackStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await FeedbackModel.update(id, { status });
        res.status(200).json(`Feedback status with ID ${id} updated successfully`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        await FeedbackModel.delete(id);
        res.status(200).json(`Feedback with ID ${id} deleted successfully`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllFeedback,
    getFeedbackById,
    createFeedback,
    updateFeedback,
    updateFeedbackStatus,
    deleteFeedback
};