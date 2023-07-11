import mongoose from "mongoose";
const { Schema } = mongoose;

const postInfoSchema = new mongoose.Schema({
    react: { type: String, default: null },
    comment: { type: String, default: null},
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
});

const PostInfo = mongoose.models?.PostInfo || mongoose.model('PostInfo', postInfoSchema);

export default PostInfo;
