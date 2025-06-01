import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = ({ imageSrc, alt }) => {
  return (
    <div className={styles.contentBlock}>
      <div className={styles.imageWrapper}>
        <div className={styles.contentBlock}>
          <div className={styles.imageWrapper}>
            <Image src={imageSrc} alt={alt} layout="fill" objectFit="cover" objectPosition="center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
