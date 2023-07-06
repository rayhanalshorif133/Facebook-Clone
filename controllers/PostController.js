import responseWithSuccess from "@/libs/res/responseWithSuccess";
import responseWithError from "@/libs/res/responseWithError";
import Post from "@/models/Post";
import PostInfo from "@/models/PostInfo";
import User from "@/models/User";


const postController = {};

postController.getPostReactInfo = async (req, res) => {
    const { postId } = req.body;
    const postInfo = await PostInfo.find(
        { post: postId, react: { $ne: null } }       
        );
    responseWithSuccess(res, postInfo);
};

postController.setPostReaction = async (req, res) => {
    const { reactTitle, postId, userEmail } = req.body;
    User.findOne({ email: userEmail }).then((user) => {
        if (user) {
            Post.findOne({ _id: postId }).then((post) => {
                PostInfo.findOne({ author: user._id, post: post._id }).then((postInfo) => {
                    if (postInfo) {
                        postInfo.react = reactTitle;
                        postInfo.save().then(() => {
                            responseWithSuccess(res, postInfo);
                        }).catch((err) => {
                            responseWithError(res, err);
                        });
                    } else {
                            PostInfo.create({
                                react: reactTitle,
                                post: post._id,
                                author: user._id
                            }).then((postInfo) => {
                                responseWithSuccess(res, postInfo);
                            }).catch((err) => {
                                responseWithError(res, err);
                            });
                    }
                });
            });
        }else{
            responseWithError(res, 'User not found');
        }
    });
};


export default postController;
