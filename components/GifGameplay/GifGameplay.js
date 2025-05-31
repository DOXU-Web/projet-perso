import Image from "next/image";
import styles from "./GifGameplay.module.css";

const GifGameplay = ({ gifUrl, altText }) => {
  return (
    <div className={styles.gifContainer}>
      <Image src={gifUrl} alt={altText} unoptimized width={500} height={500} />
    </div>
  );
};

export default GifGameplay;
