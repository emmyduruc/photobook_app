import { useState, useEffect } from "react";
import { db } from "../../fireBase/config";
import { collection, getDocs } from "firebase/firestore";

const useFirestore = (data) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    let documents = [];
    const getImages = async () => {
      const querySnapshot = await getDocs(collection(db, "images"));
      console.log("querySnapshot", querySnapshot);

      console.log("documents", documents);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    };
    getImages();
  }, [data]);

  
  return { docs };
};

export default useFirestore;
