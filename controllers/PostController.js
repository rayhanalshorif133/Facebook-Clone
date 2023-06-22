import { storage } from "@/database/firebaseDb";
import { postRef, testRef } from "@/database/reference";
import { addDoc, updateDoc } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";


const metadata = {
    contentType: 'image/jpeg'
};

const postController = {};

postController.create = async (data, getFile = null) => {

    // base64 encode
    const result = await addDoc(postRef, data);
    if (result && getFile !== null) {
        await imageUploadBytes(result, getFile);
    }
};

const imageUploadBytes = async (result, getFile) => {
    const storage = getStorage();
    const imageName = result.id + '.jpg';

    const storageRef = ref(storage, 'posts/' + imageName);
 

    // Upload the file and metadata
    const uploadTask = await uploadBytes(storageRef, getFile, metadata);
    if (uploadTask) {
        getDownloadURL(storageRef)
            .then((url) => {
                updateDoc(result, {
                    postImage: url,
                });
            })
    }
};


// Just Practice

async function uploadBytesResumableData(result, uploadFile) {


    const storage = getStorage();
    const metadata = {
        contentType: 'image/jpeg'
    };

    const imageName = result.id + '.jpg';

    const storageRef = ref(storage, 'posts/' + imageName);
    const uploadTask = uploadBytesResumable(storageRef, uploadFile, metadata);

    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress + '% done');
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                updateDoc(result, {
                    postImage: downloadURL,
                });
            });
        }
    );

}


export default postController;
