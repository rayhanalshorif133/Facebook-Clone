import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new mongoose.Schema({
    description: { type: String },
    image: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
});

const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);

export default Post;
