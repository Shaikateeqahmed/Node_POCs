const express = require('express');
const connectDB = require('./config/db');
const noteRoute = require('./routes/noteroute');

const app = express();

app.use(express.json());
app.use('/notes', noteRoute);

app.listen(3000, async () => {
    await connectDB;
    console.log(`Server is running on port ${process.env.Port}`);
});