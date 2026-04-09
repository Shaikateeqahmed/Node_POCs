const dynamoose = require('dynamoose');
require('dotenv').config();

const feedbackSchema = new dynamoose.Schema({
    id: {
        type: String,
        hashKey: true,
        default: () => require('uuid').v4()
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['pending', 'in-progress', 'resolved'],
        default: 'pending'
    }
});

const FeedbackModel = dynamoose.model(process.env.AWS_DYNAMODB_TABLENAME, feedbackSchema);

module.exports = FeedbackModel;