import { useContext, useEffect, useState } from "react";
import { GenerateApiContext } from "../context";

const useSearchPrompt = () => {
  const [images, setImage] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState("");
  const { selectedData } = useContext(GenerateApiContext);

  const fetchGenerateData = async (prompt, width, height, model) => {
      try {
        setLoading({ state: true, message: "Fetching data..." });
        const urls = [];
        for (let i = 0; i < 9; i++) {
          const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(
            prompt
          )}?width=${width}&height=${height}&model=${model}&seed=${Math.random()}`;
          
          urls.push(url);
        }
        setImage(urls);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading({ state: false, message: "" });
      }
    };

  useEffect(() => {
    if (selectedData?.prompt) {
      fetchGenerateData(
        selectedData.prompt,
        selectedData.width,
        selectedData.height,
        selectedData.model
      );
    }
  }, [selectedData]);

  return { images, loading, error };
};

export default useSearchPrompt;
