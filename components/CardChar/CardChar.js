"use client";

import { useState } from "react";
import styles from "./CardChar.module.css";

const CardChar = ({
  imageSrc,
  alt,
  title,
  subtitle,
  description,
  longDescription,
  variant = "default",
  className = "",
  children,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const blockClass = `${styles.contentBlock} ${variant !== "default" ? styles[variant] : ""} ${className}`;

  return (
    <>
      <div className={blockClass}>
        {variant !== "default" && <div className={`${styles.badge} ${styles[variant]}`}></div>}

        <div className={styles.imageWrapper}>
          <img
            src={imageSrc}
            alt={alt}
            className={`${styles.image} ${imageLoaded ? styles.loaded : ""}`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className={styles.shineEffect}></div>
        </div>

        <div className={styles.content}>
          {title && <h1>{title}</h1>}
          {subtitle && <h3>{subtitle}</h3>}
          {description && <p>{description}</p>}
          {longDescription && <p className={styles.description}>{longDescription}</p>}
          {children}
          <a href="#" className={styles.readMore}>
            En savoir plus →
          </a>
        </div>
      </div>
    </>
  );
};

export default CardChar;
