import responseWithError from "@/libs/res/responseWithError";
import responseWithSuccess from "@/libs/res/responseWithSuccess";
import User from "@/models/User";
import DBConnection from "@/libs/database/connection";


export default async function logout(req, res) {


    // api/user/logout
    await DBConnection();

    const {email} = req.body?.user;

    const updateUser = await User.findOneAndUpdate(
        { email: email },
        { activeStatus: false },
        { new: true }
    );

    if(updateUser){
        responseWithSuccess(res, updateUser, 'Logout successfully');
    }else{
        responseWithError(res, [], 'Logout failed');
    }
  }