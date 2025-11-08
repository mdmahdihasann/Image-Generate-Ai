import ImageCard from "./ImageCard";
import useSearchPrompt from "../../hooks/useSearchPrompt";

function ImagePresets() {
  const { images, loading } = useSearchPrompt();

  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      {loading.state ? (
        <span>Fetching data...</span>
      ) : images.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <ImageCard key={index} img={img} />
          ))}
        </div>
      ) : (
        <span>Not Found Data</span>
      )}
    </div>
  );
}

export default ImagePresets;
