
import ImageCard from "./ImageCard";
import useSearchPrompt from "../../hooks/useSearchPrompt";

function ImagePresets() {
  const { images, loading } = useSearchPrompt();

  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        { loading.state ? ( <span>Loading image...</span> ) : 
        (images.map((img, index) => <ImageCard key={index} img={img} />)) }
      </div>
    </div>
  );
}

export default ImagePresets;
