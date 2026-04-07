const express = require('express');

require('./config/dynamoDB'); // Ensure DynamoDB is configured before starting the server
require('dotenv').config();


const app = express();

app.use(express.json());

// Import and use your routes
const todoRoutes = require('./routes/todoRoutes');
app.use('/todos', todoRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});