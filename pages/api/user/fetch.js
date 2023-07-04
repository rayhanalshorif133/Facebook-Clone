import responseWithSuccess from "@/libs/res/responseWithSuccess";
import User from "@/models/User";

export default async function getUsers(req, res) {

    if (res) {
        res.setHeader('Cache-Control', 'no-store');
        res.setHeader('Cache-Control', 's-maxage=0, stale-while-revalidate');
    }

    // req has a get type of 'users'
    const type = req.body.type;
    const email = req.body.email;
    if (type === 'active') {
        const activeUsers = await User.find({
            activeStatus: true,
            email: { $ne: email }
        });
        responseWithSuccess(res, activeUsers);
    } else {
        const inactiveUsers = await User.find({ activeStatus: false });
        responseWithSuccess(res, inactiveUsers);
    }

}