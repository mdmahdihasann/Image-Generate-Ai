import React, { useState } from "react";
import { GenerateApiContext } from "../context";

export const GenerateProvider = ({ children }) => {
  const [selectedData, setSelectedData] = useState({
    prompt: "",
    width: "",
    height: "",
    model: "",
    seed: Math.random(),
  });
  const [downloadImage, setDownloadImage] = useState([
    {
      url: "",
    },
  ]);
  return (
    <GenerateApiContext.Provider
      value={{ selectedData, setSelectedData, downloadImage, setDownloadImage }}
    >
      {children}
    </GenerateApiContext.Provider>
  );
};
