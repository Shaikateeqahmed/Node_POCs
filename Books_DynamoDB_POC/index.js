const express = require('express');
const bookRoutes = require('./routes/bookRoutes');

require('./config/dynamoDB');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/books', bookRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});