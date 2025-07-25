// Next.js
import Image from "next/image";

// Styles
import styles from "./index.module.css";

// Components
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail";
import CharacterNavigation from "../../components/CharacterNavigation/CharacterNavigation";

const Sheer = () => {
  return (
    <div className={styles.pageContainer}>
      <CharacterNavigation currentCharacter="sheer" styles={styles} />

      <CharacterDetail characterName="Sheer" styles={styles} />

      <Image
        src="/sheer2.png"
        alt="Sheer Splash"
        className={styles.image1}
        width={1300}
        height={800}
        priority
      />
    </div>
  );
};

export default Sheer;