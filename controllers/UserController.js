import { db } from "@/database/firebaseDb";
import { userRef } from "@/database/reference";
import { collection } from "firebase/firestore";
import { addDoc, getDocs } from "firebase/firestore/lite";
import { signOut } from "next-auth/react";
import { v4 as uuidv4 } from 'uuid';


const userController = {};


const updateUserStatus = async (session, status) => {


    const userRef = collection(db, 'users');




    return true;
};

userController.handleGoogleSignIn = () => {
    // signIn('google', { callbackUrl: 'http://localhost:3000' });
}

userController.handleLogout = async (session) => {

    // const users = await getDocs(userRef);

    // users.forEach((user) => {
    //     console.log(user.data());
    // });
    signOut();
};


userController.userCreateOrUpdate = async (session) => {
    //    pushNewUser(userRef, session);
    const existUser = await isExistUser(session);
    if (!existUser) {
        pushNewUser(userRef, session);
    } else {
        console.log('user exist');
        updateUserStatus(session, 'active');
    }
    return true;
}


userController.getUsers = async () => {
    try {
        const docSnap = await getDocs(userRef);

        docSnap.forEach((doc) => {
            // console.log(doc.data());
        })
    } catch (error) {
        // console.log(error)
    }
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