import { storage } from "@/database/firebaseDb";
import { postRef, testRef } from "@/database/reference";
import { addDoc, updateDoc } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";


const metadata = {
    contentType: 'image/jpeg'
};

const postControllerBack = {};

postControllerBack.create = async (data, getFile = null) => {

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


export default postControllerBack;
