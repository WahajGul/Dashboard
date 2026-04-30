const express = require('express');
const app = express();
require('dotenv').config();

const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('Server running...');
});