
const PostSchema = mongoose.schema({
    "title":String,
    "description":String
})

const Post=mongoose.model('Post',PostSchema);


