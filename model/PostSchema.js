const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String,
    description: String
});

const Post = mongoose.model('Posts', PostSchema);