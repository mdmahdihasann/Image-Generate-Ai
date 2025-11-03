import React from "react";
import ImageCard from "./ImageCard";

function ImagePresets() {
  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <ImageCard/>
      </div>
    </div>
  );
}

export default ImagePresets;
