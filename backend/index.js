// const express=require('express')
import express from 'express';
const app=express()
// const cookie_parser=require('cookie-parser')
import cookie_parser from 'cookie-parser';
// const cors=require('cors')
import cors from 'cors';
// const connectDB = require('./utils/db'); // Import the database connection utility
import connectDB from './utils/db.js'; // Import the database connection utility
// const routes = require('./routes/user.route'); // Import user routes
import routes from './routes/user.route.js'; // Import user routes

const port=3000

app.use(express.json())
app.use(cookie_parser())
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin: 'http://localhost:3000', // Allow only React frontend
//   methods: ['GET', 'POST'],       // Optional: limit allowed HTTP methods
  credentials: true               // Optional: allow cookies/auth headers
}));

app.get('/',(req,res)=>{
    return res.status(200).json({
        message:"Welcome to the server",
        success:true

    })
});

app.use('/api/v1/user', routes); // Use user routes


app.listen(port ,()=>{
    connectDB(); // Connect to the database
    console.log(`Server is running on http://localhost:${port}`)
})