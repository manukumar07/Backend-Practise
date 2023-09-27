import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: String,
    username: {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true
    },
    phoneNumber:  {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', UserSchema);

export default User;