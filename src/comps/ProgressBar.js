import React from "react";
import useStorage from "./hooks/useStorage";
import { useState, useEffect } from "react";

function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  console.log("progress:", progress, "url:", url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
}

export default ProgressBar;
