import ProgressBar from "./ProgressBar";
import React from "react";
import { useState } from "react";

function UploadForm() {
  const [file, setFile] = useState(null);
  console.log("file:", file);
  const [error, setError] = useState();

  const changeHandler = (e) => {
    const selected = e.target.files[0];
    console.log("selected", selected);
    const allowedType = ["image/png", "image/jpeg"];

    if (selected && allowedType.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("please select and image file type of either (png or jpeg)");
    }
  };
  return (
    
      <form>
        <label>
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && (
            <div className="error">
              {" "}
              {file.name} size:{file.size}kb
            </div>
          )}
        </div>
        {file && <ProgressBar file={file} setFile={setFile} />}
      </form>
    
  );
}

export default UploadForm;
