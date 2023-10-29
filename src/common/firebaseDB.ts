import { db, storage } from '@/app/firebase';
import { UserData, UserSchema } from '@common/types';
import { getUserInitData } from '@common/user';
import { setDoc, doc, updateDoc, serverTimestamp, Timestamp, getDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

if(!process.env.NEXT_PUBLIC_FIREBASE_USERS_COLLECTION_NAME) {
  throw new Error('NEXT_PUBLIC_USER_COLLECTION_NAME not found');
}

const userCollection = process.env.NEXT_PUBLIC_FIREBASE_USERS_COLLECTION_NAME

export async function initUser(userId: string, username: string) {
  const userRef = doc(db, userCollection, userId);
  const userData: UserSchema = {
    ...getUserInitData(userId, username),
    createdAt: serverTimestamp() as Timestamp,
    updatedAt: serverTimestamp() as Timestamp
  }

  try {
    await setDoc(userRef, userData, { merge: true });
  } catch (error) {
    console.error("Error create user: ", error);
  }
}

export async function getUser(userId: string) {
  try {
    const userDoc = await getDoc(doc(db, userCollection, userId));
    return userDoc.exists() ? userDoc.data() as UserSchema : null
  } catch (error) {
    console.error("Error: get user: ", error);
  }
}

export async function updateUser(userId: string, data: Partial<UserData>) {
  const userRef = doc(db, userCollection, userId);
  
  try {
    await updateDoc(userRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error("Error update user: ", error);
  }
}



export async function uploadBlob(blob: Blob, fileName: string): Promise<string> {
  // Create the file metadata
  const metadata = {
    contentType: 'image/png'
  };

  // Upload file and metadata
  const storageRef = ref(storage, 'images/' + fileName);
  const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

  return new Promise<string>((resolve, reject) => {
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
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
        // Handle errors
        // You can add specific error handling logic based on error codes if needed
        console.error("Upload error:", error);
        reject(error);
      }, 
      async () => {
        // Upload completed successfully, now we can get the download URL
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at', downloadURL);
          resolve(downloadURL);
        } catch (error) {
          console.error("Error getting download URL:", error);
          reject(error);
        }
      }
    );
  });
}