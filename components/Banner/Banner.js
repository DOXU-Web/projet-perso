"use client";

import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = ({ imageSrc, alt }) => {
  const handleDownload = () => {
    window.open("#", "_blank"); // Remplace par ton vrai lien
  };

  return (
    <section className={styles.banner}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <div className={styles.overlay}>
          <button className={styles.downloadBtn} onClick={handleDownload}>
            Download Beta
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
