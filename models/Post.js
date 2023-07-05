import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    description: { type: String },
    image: { type: String },
    user: {type: mongoose.Types.ObjectId, ref: "User"}
}, {
    timestamps: true
});

const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);

export default Post;
