import { PostReactionEmojis } from "@/libs/data/postReactionEmojis";
import responseWithSuccess from "@/libs/res/responseWithSuccess";

export default function Index(req,res) {
    responseWithSuccess(res,PostReactionEmojis);
}