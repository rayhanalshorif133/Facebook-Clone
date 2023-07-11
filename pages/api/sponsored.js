import { sponsored } from "@/libs/data/sponsored";
import responseWithSuccess from "@/libs/res/responseWithSuccess";

export default function Index(req,res) {
    responseWithSuccess(res,sponsored);
}