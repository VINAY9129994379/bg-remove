const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables
const connectDB = require('./config/mongodb'); // Import MongoDB connection


const app = express();
const port = process.env.PORT || 4000;   

// Connect to MongoDB
connectDB();

// Connect to Cloudinary


app.use(express.json()); // Parse JSON bodies 
app.use(cors()); // Enable CORS



// Basic route
app.get('/', (req, res) => {
    res.send('API working');    
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  
});


//