import mongoose from 'mongoose';
import express from 'express';
// const express = require('express');
import cors from 'cors';
import 'dotenv/config'
// const mongoose = require('mongoose');
// const cors = require('cors');
import PostRoutes from './routes/post.js'
import AuthRoutes from './routes/auth.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/posts', PostRoutes)
app.use('/auth', AuthRoutes)

const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL).then(()=>{
  console.log("DB Connected...")
})

app.listen(5000, ()=>{
  console.log("Server is running...")
})
