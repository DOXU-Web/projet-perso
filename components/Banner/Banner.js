"use client";

import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = (props) => {
  const imageSrc = props.imageSrc;
  const alt = props.alt;

  const handleDownload = () => {
    window.open("https://store.steampowered.com/app/3883600/DOXU/?curator_clanid=4777282", "_blank");
  };

  const handleSecondAction = () => {
    window.open("https://drive.google.com/file/d/1MwWKyk_BV7IBT90AyyNSFBHZ75xDAL3o/view?usp=sharing", "_blank");
  };

  return (
    <section className={styles.banner}>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={alt} width={1400} height={800} priority />

        <div className={styles.overlay}>
          <div className={styles.buttonContainer}>
            <button className={styles.downloadBtn} onClick={handleDownload}>
              Steam Page
            </button>
            <button className={styles.downloadBtn} onClick={handleSecondAction}>
              Download Beta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
