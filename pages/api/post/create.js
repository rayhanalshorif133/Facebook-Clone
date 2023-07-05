import responseWithError from "@/libs/res/responseWithError";
import responseWithSuccess from "@/libs/res/responseWithSuccess";
import Post from "@/models/Post";
import User from "@/models/User";

export default async function create(req, res) {
    const {user, post_des,post_image} = req.body;
    // find user
    const getUser = await User.find({
        email: user.email
    });

    if(getUser){
        Post.create({
            description: post_des,
            image: post_image,
            author: getUser[0]._id
        }).then((post) => {
            responseWithSuccess(res, post);
        }).catch((err) => {
            responseWithError(res, err);
        })
    }else{
        responseWithSuccess(res, [], "User not found");
    }

}