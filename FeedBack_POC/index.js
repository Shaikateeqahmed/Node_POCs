const express = require('express');
const serverless = require('serverless-http');
const feedbackRoute = require('./routes/feedbackRoute');

// require('dotenv').config();
require('./config/dynamoDB');

const app = express();

app.use(express.json());

app.use('/feedback', feedbackRoute);

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });

module.exports.handler = serverless(app);