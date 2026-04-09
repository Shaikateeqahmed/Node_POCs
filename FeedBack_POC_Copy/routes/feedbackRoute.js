const express = require('express');
const { getAllFeedback, getFeedbackById, createFeedback, updateFeedback, updateFeedbackStatus, deleteFeedback } = require('../controllers/feedbackController');

const feedback = express.Router();

feedback.get('/', getAllFeedback);

feedback.get('/:id', getFeedbackById);

feedback.post('/create', createFeedback);

feedback.patch('/updateFeedback/:id', updateFeedback);

feedback.patch('/updateFeedbackStatus/:id', updateFeedbackStatus);

feedback.delete('/delete/:id', deleteFeedback);

module.exports = feedback;