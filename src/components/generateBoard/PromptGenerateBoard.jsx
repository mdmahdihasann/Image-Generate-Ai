import React from "react";
import PromptSerach from "./PromptSerach";
import AdvanceSetting from "./AdvanceSetting";
import ImagePresets from "./ImagePresets";

const PromptGenerateBoard = () => {
  return (
    <main className="relative z-10">
      {/* <!-- Welcome Message --> */}
      <h2 className="text-4xl font-bold mb-8">
        Let's create a masterpiece, Alvian! <span className="text-2xl">👋</span>
      </h2>

      {/* <!-- Search Input --> */}
      <PromptSerach/>

      {/* <!-- Settings Panel --> */}
      <AdvanceSetting/>

      {/* <!-- Image Presets Section --> */}
      <ImagePresets/>
    </main>
  );
};

export default PromptGenerateBoard;
