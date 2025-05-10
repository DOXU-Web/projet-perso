import Image from "next/image";
import styles from "./GifGameplay.css";

const GifGameplay = ({ gifUrl, altText }) => {
  return (
    <div className="gif-container">
      <Image src={gifUrl} alt={altText} unoptimized width={500} height={500} />
    </div>
  );
};

export default GifGameplay;
