import responseWithSuccess from "@/libs/res/responseWithSuccess";
import User from "@/models/User";

export default async function getUsers(req, res) {

   
    // req has a get type of 'users'
    const type = req.body.type;
    const email = req.body.email;
    if (type === 'active') {
        const activeUsers = await User.find({
            activeStatus: true,
            email: { $ne: email }
        });
        responseWithSuccess(res, activeUsers);
    }

}