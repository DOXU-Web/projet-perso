// Next.js
import Image from "next/image";

// Styles
import styles from "./index.module.css";

// Components
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail";
import CharacterNavigation from "../../components/CharacterNavigation/CharacterNavigation";

const Sethj = () => {
  return (
    <div className={styles.pageContainer}>
      <CharacterNavigation currentCharacter="sethj" styles={styles} />

      <CharacterDetail characterName="Sethj" styles={styles} />

      <Image
        src="/sethj2.png"
        alt="Sethj Splash"
        className={styles.image1}
        width={1300}
        height={800}
        priority
      />
    </div>
  );
};

export default Sethj;