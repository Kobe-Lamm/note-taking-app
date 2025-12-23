// Dependencies:
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// Environment variables:
const PORT = process.env.PORT || 3000;

// setting up middleware:
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5142",
    methods: ["GET", "POST", "PUT", "DELETE"],
}))

// Routes: 

// Setting up port:
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
