import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import axios from 'axios';
import userRoutes from './src/routes/userRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// console.log("AWS_SECRET__", process.env.AWS_SECRET)
console.log("GIT_SECRET__", process.env.GIT_SECRET)
// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Node.js Backend' });
});

// Example route using Axios
app.get('/api/external', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching external data' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 