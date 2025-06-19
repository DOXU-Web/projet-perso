import Image from "next/image";
import styles from "./ContentBlock.module.css";

const ContentBlock = ({ id, imageSrc, alt = "Image de contenu", children }) => {
  return (
    <div id={id} className={`${styles.anchor} ${styles.contentBlock}`}>
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority={false}
          />
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  );
};

export default ContentBlock;
