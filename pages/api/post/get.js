import responseWithError from "@/libs/res/responseWithError";
import responseWithSuccess from "@/libs/res/responseWithSuccess";
import Post from "@/models/Post";

export default async function get(req, res) {
    
    Post.find().populate('user').then((posts) => {
        responseWithSuccess(res, posts);
    }).catch((err) => {
        responseWithError(res, err);
    })
}