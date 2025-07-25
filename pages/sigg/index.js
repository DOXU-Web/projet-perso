// Next.js  
import Image from "next/image";

// Styles
import styles from "./index.module.css";

// Components
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail";
import CharacterNavigation from "../../components/CharacterNavigation/CharacterNavigation";

const Sigg = () => {
  return (
    <div className={styles.pageContainer}>
      <CharacterNavigation currentCharacter="sigg" styles={styles} />

      <CharacterDetail characterName="Sigg" styles={styles} />

      <Image
        src="/sigg.png"
        alt="Sigg Splash"
        className={styles.image1}
        width={1300}
        height={800}
        priority
      />
    </div>
  );
};

export default Sigg;