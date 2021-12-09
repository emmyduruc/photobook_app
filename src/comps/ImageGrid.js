import React from "react";
// import { motion } from 'framer-motion';
import useFirestore from "./hooks/useFirestore";


const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('image');
  console.log("docs:", docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(doc.downloadURL)}
          >
            <img
              src={doc.downloadURL}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
