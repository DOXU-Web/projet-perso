import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/doxu_art.png"
        alt="Hero Banner"
        layout="fill"
        objectFit="cover"
        priority
        className={styles.heroImage}
      />

      <div className={styles.buttonContainer}>
        <a href="#section-jeu" className={styles.ctaButton}>
          TRAILER
        </a>
      </div>
    </div>
  );
};

export default Banner;
