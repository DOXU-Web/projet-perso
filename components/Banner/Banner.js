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
          quality={95}
          sizes="(max-width: 480px) 95vw, (max-width: 768px) 95vw, (max-width: 1024px) 95vw, 92vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            imageRendering: "high-quality",
          }}
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
