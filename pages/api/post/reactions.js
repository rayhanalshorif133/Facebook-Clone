import postController from "@/controllers/PostController";
import responseWithSuccess from "@/libs/res/responseWithSuccess";



export default function Index(req, res) {
    // /api/post/reactions

    if(req.method === 'POST'){
        req.body.action === 'setPostReaction' &&  postController.setPostReaction(req, res);
        req.body.action === 'getPostReactInfo' &&  postController.getPostReactInfo(req, res);
    }else{
        responseWithSuccess(res, 'Method not allowed');
    }
}