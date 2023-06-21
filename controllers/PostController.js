import { storage } from "@/database/firebaseDb";
import { postRef } from "@/database/reference";
import { addDoc } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const metadata = {
    contentType: 'image/jpeg'
};

const postController = {};


// Create a new post
postController.create = async (data, getFile = null) => {

    // base64 encode
    
    const result = await addDoc(postRef, data);
    
    const imageNew = getFile.replace(/^data:image\/[a-z]+;base64,/, "");
    const imageName = result.id + '.jpg';

    const newFile =  new File([imageNew], imageName, { type: 'image/jpeg' })



    const storage = getStorage();

    const storageRef = ref(storage, 'images/' + imageName);
    const uploadTask = uploadBytesResumable(storageRef, newFile, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
        }
    );

};


export default postController;
