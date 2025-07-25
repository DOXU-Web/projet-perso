import Image from "next/image";
import styles from "./ContentBlock.module.css";

const ContentBlock = (props) => {
  const id = props.id;
  const imageSrc = props.imageSrc;
  const alt = props.alt || "Image de contenu";
  const children = props.children;
  return (
    <div id={id} className={`${styles.anchor} ${styles.contentBlock}`}>
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={alt}
            width={1200}
            height={800}
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
