
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express(); 
app.use(express.json()); 
app.use(cors());
const PostSchema = require('./model/PostSchema');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Define the MongoDB Connection URL

const Connection_URL = process.env.MONGODB_URL;

// Database Connect

mongoose.connect( Connection_URL )
.then(()=>{
    console.log('Database Connected');
})

// create a api to post a data using a Route..

app.post('/create', async (req, res) => {
        const newPost = await Post.create(req.body);
        res.json({ data: newPost }); 
})

// To GET the DATA 

app.get('/', async (req, res) => {
        const posts = await Post.find();
        res.json({ Posts: posts }); 
});

// GET the DATA using the Id

app.get('/:id',async (req,res)=>{
    const posts = await Post.find({_id: req.params.id });
    res.json({Posts: posts});
});

// UPDATE The DATA Using Id

app.patch('/updatePost/:id',async(req,res)=>{
    const updatePost = await Post.findByIdAndUpdate(req.params.id,req.body);
    res.json({data: updatePost})
})

// DELETE the Data

app.delete('/deletePost/:id',async(req,res)=>{
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    res.send("Post Deleted Successfully")
})

// app.listen(5000,()=>{
//     console.log('Connection Successfully')
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


