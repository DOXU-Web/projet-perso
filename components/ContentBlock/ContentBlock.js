import Image from "next/image";
import styles from "./ContentBlock.module.css";

const ContentBlock = ({ imageSrc, alt, children }) => {
  return (
    <div className={styles.contentBlock}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill" // <-- prend toute la place du parent
          objectFit="cover" // <-- garde le ratio, remplit sans déformer
          objectPosition="center" // <-- centre l’image
          priority // <-- chargement prioritaire (optionnel)
        />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ContentBlock;
