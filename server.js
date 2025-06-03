const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => console.error("MongoDB connection error:", err));

// Root route
app.get('/', (req, res) => {
  res.send("Hello Express + MongoDB!");
});

// API routes
app.use('/api', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING on http://localhost:${PORT}`);
});
