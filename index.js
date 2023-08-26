
// import { models } from 'mongoose';

const express =require ('express');

// import mongoose
const mongoose=require('mongoose');

// import cors
const cors=require('cors');

const app=express()
app.use(cors())


// connect database to mongoose

const CONNECTION_URL=""

// any error in connection

// mongoose.connect(CONNECTION_URL,{
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })

mongoose.connect(CONNECTION_URL).then(()=>{
    console.log('Database Connected');
})
// create a schema 

const PostSchema = mongoose.Schema({
    "title":String,
    "description":String
})

const Post=mongoose.model('Post',PostSchema);


// create a api to post a data using a route

app.post('/create',async(req,res) => {
    const NewPosts =await Post.create(req.body);
    res.json({data:NewPosts})
})

//create a api to get the data by use a route

app.post('/',async(req,res) => {
    const GetPosts =await Post.find();
    res.json({data:GetPosts})
})

app.listen(5000,()=>{
    console.log('Connection Successfully')
})

// how to handle to server to provide a server to client to provide data security
// cors

