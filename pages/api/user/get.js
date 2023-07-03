import responseWithSuccess from "@/libs/res/responseWithSuccess";
import User from "@/models/User";

export default async function getUsers(req,res){
    // req has a get type of 'users'
    const type = req.query.type;
    const containsUser = req.query.containsUser;
    console.log(containsUser);
    if(type === 'active'){
        const activeUsers = await User.find({activeStatus:true});
        responseWithSuccess(res,activeUsers);
    }else{
        const inactiveUsers = await User.find({activeStatus:false});
        responseWithSuccess(res,inactiveUsers);
    }

}