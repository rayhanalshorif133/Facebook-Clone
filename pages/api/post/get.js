import responseWithError from "@/libs/res/responseWithError";
import responseWithSuccess from "@/libs/res/responseWithSuccess";
import Post from "@/models/Post";

export default async function get(req, res) {


    // post with user details
    const posts = await Post.find({}).populate('author')
        .sort({ createdAt: -1 });
    if (posts) {
        responseWithSuccess(res, posts);
    } else {
        responseWithError(res, [], "Posts not found");
    }
}