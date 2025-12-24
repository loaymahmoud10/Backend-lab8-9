import courseRouter from './routes/courseRoute.js';
import express from 'express';
import mongoose from 'mongoose';
const app=express()

app.use(express.json())
// MongoDB connection
mongoose.connect("mongodb://localhost:27017/webLab")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.listen(3000,()=>{
    console.log("app is listening on port 3000");
})

app.use('/courses',courseRouter)