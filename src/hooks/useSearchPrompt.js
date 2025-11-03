import { useContext, useEffect, useState } from "react";
import { GenerateApiContext } from "../context";

const useSearchPrompt = () => {
  const [generateImage, setGenerateImage] = useState({
    prompt: "",
    width: "",
    height: "",
    model: "",
  });
  const [api, setApi] = useState("");
  
  
  
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState("");
  const { selectedData } = useContext(GenerateApiContext);

  const fetchGenerateData = async (prompt, width, height, model) => {
    try {
      setLoading({ state: true, message: "Fetching data..." });

      const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(
        prompt
      )}?width=${width}&height=${height}&model=${model}`;
      
      setApi(url)
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);

      setGenerateImage({ prompt, width, height, model, url });

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({ state: false, message: "" });
    }
  };

  useEffect(() => {
      fetchGenerateData(
        selectedData.prompt,
        selectedData.width,
        selectedData.height,
        selectedData.model,
        selectedData.url
      );
  }, [selectedData]);

  return { generateImage, loading, error,api };
};

export default useSearchPrompt;
