import express from 'express';
const app=express()
import cookie_parser from 'cookie-parser';
import cors from 'cors';
import connectDB from './utils/db.js'; // Import the database connection utility
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