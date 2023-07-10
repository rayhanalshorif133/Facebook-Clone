import responseWithSuccess from "@/libs/res/responseWithSuccess";
import User from "@/models/User";
import DBConnection from "@/utils/DBConnection";

// /api/user/modify
export default async function userCreateOrUpdate(req, res) {

    await DBConnection();
    const { name, email, image } = req.body?.user;
    const data = await User.findOne({ email: email });
    if (data) {
        const doc = await User.findOneAndUpdate(
            { email: email },
            { activeStatus: true,
                image: image,
                name: name
            }
        );
        doc && responseWithSuccess(res, [], 'User updated successfully');
    } else {
        const doc = await User.create({
            name: name,
            email: email,
            image: image,
            activeStatus: true,
        });
        doc && responseWithSuccess(res, [], 'User create successfully');
    }

}