
const express =require ('express');
// import mongoose
const mongoose=require('mongoose');
// import cors
const cors=require('cors');
const app=express()

app.use(cors())

// connect database to mongoose

const CONNECTION_URL="mongodb+srv://palmanukumar53:BaQTZfqBIIdjMc66@cluster0.glcb4wf.mongodb.net/"

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
    "title": String ,
    "description":String
})

const Post = mongoose.model('Posts',PostSchema);


// create a api to post a data using a route

app.post('/create',async(req,res) => {
    const NewPosts =await Post.create(req.body);
    res.json({data:NewPosts})
})

//create a api to get the data by use a route


app.get('/', async(req,res) => {
    const posts =await Post.find();
    res.json({Posts:posts})
})

// app.get("/:id", async(req,res)=>{
//     const posts= await Post.find({_id:req.params.id});
//     res.json({Posts:posts})

// })
app.get("/updatePost/:id", async(req,res)=>{
    const updatePost = await Post.findByIdAndUpdate(req.params.id,req.body)
    res.json({data:updatePost})

})

app.delete("/delete/:id", async(req,res)=>{
    await Post.findByIdAndDelete(req.params.id)
    res.send("Post delete Sucessfully")

})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })


app.listen(5000,()=>{
    console.log('Connection Successfully')
})

// how to handle to server to provide a server to client to provide data security
// cors

