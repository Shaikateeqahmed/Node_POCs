const express = require('express');
const cors = require('cors');
const tokenValidation = require('./Middleware/authMiddleware');

const app = express();
app.use(cors());
app.use(express.json());
app.use(tokenValidation);
app.get('/api', (req, res) => {
  console.log(req.user); // Log the authenticated user info for debugging
  res.json({ message: 'Hello from the backend!' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});