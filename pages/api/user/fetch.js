import responseWithSuccess from "@/libs/res/responseWithSuccess";
import User from "@/models/User";
import DbConnection from "@/libs/database/connection";

export default async function getUsers(req, res) {

   
    // req has a get type of 'users'
    // api/user/fetch
    await DbConnection();
    const type = req.body.type;
    const email = req.body.email;
    if (type === 'active') {
        const activeUsers = await User.find({
            activeStatus: true,
            email: { $ne: email }
        });
        responseWithSuccess(res, activeUsers);
    }else if (type === 'get-one-user-by-email') {
        const getUser = await User.find({email: email });
        const user = getUser? getUser[0]: null;
        responseWithSuccess(res, user);
    }else{
        responseWithSuccess(res,[],"Change your type or No user has been found");
    }

}