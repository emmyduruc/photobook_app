import { useState, useEffect } from "react";
import { projectStorage, db } from "../../fireBase/config";
import { addDoc, collection } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// const projectStorage = getStorage(app);
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  //img url get back from storage after image is uploaded
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // ref to were the file will be save
    const storage = getStorage();

    // const docRef = addDoc(collection(db, "users")),
    const storageRef = ref(storage, file.name);
    //gets file and upload to storage
    const uploadTask = uploadBytesResumable(storageRef, file);
    const usersCollectionRef = collection(db, "images");
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + percentage + "% done");
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        // Upload completed successfully, now we can get the download URL
        // const createdAt = Timestamp();
        const now = new Date();
        const day = `${now.getDate()}`.padStart(2, 0);
        const month = `${now.getMonth() + 1}`.padStart(2, 0);
        const year = now.getFullYear();
        const hour = `${now.getHours()}`.padStart(2, 0);
        const min = `${now.getMinutes()}`.padStart(2, 0);

        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(usersCollectionRef, {
            downloadURL,
            createdAt: `${day}/${month}/${year}, ${hour}:${min}`,
          });
          setUrl(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
