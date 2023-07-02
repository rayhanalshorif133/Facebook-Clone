import connectDB, { db } from "@/database/mongodb";
import { userRef } from "@/database/reference";
import User from "@/models/User";
import { collection } from "firebase/firestore";
import { addDoc, getDocs } from "firebase/firestore/lite";
import { signIn, signOut } from "next-auth/react";
import { v4 as uuidv4 } from 'uuid';


const userController = {};

// Auth with Google
userController.handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
}

userController.handleLogout = async (session) => {
    await connectDB();
    const {email} = session?.user;
    const doc = await User.findOneAndUpdate(
        { email: email },
        { activeStatus: false },
        { new: true }
    );
    if(doc){
        signOut();
    }
};
userController.handleLogoutTest = async (session) => {
    await connectDB();
    const {email} = session?.user;
    const doc = await User.findOneAndUpdate(
        { email: email },
        { activeStatus: false },
        { new: true }
    );
   console.log('logged out');
};


const updateUserStatus = async (session, status) => {

};



userController.userCreateOrUpdate = async (session) => {
    await connectDB();
    const { name, email, image } = session?.user;
    console.log(session);
}
userController.userCreateOrUpdate2 = async (session) => {
    await connectDB();
    const { name, email, image } = session?.user;
    const data = await User.findOne({ email: email });
    if (data) {
        const doc = await User.findOneAndUpdate(
            { email: email },
            { activeStatus: true },
            { new: true }
        );
        return doc;
    } else {
        const doc = await User.create({
            name: name,
            email: email,
            image: image,
            activeStatus: true,
        });
        return doc;
    }


}

userController.getUsers = async (session) => {

}




const isExistUser = async (session) => {
    try {
        var emails = [];
        const docSnap = await getDocs(userRef);
        docSnap.docs.map((doc) => {
            emails.push(doc.data().email);
        });
        var hasEmail = emails.includes(session.user.email);
        return hasEmail;
    } catch (error) {
        return false;
    }
}


const pushNewUser = (userRef, session) => {

    addDoc(userRef, {
        id: uuidv4(),
        status: 'active',
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
    });
    return true;
};






export default userController;