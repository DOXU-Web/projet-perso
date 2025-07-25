// Next.js
import Link from "next/link";

const CharacterNavigation = (props) => {
  const currentCharacter = props.currentCharacter;
  const styles = props.styles;
  
  // Navigation simple selon le personnage actuel
  let prevCharacter = "";
  let nextCharacter = "";
  
  if (currentCharacter === "sethj") {
    prevCharacter = "sheer";
    nextCharacter = "sigg";
  } else if (currentCharacter === "sheer") {
    prevCharacter = "sigg";
    nextCharacter = "sethj";
  } else if (currentCharacter === "sigg") {
    prevCharacter = "sethj";
    nextCharacter = "sheer";
  }

  return (
    <>
      {/* Bouton Retour */}
      <Link href="/#showcase">
        <button className={styles.backButton}>Back</button>
      </Link>

      {/* Navigation entre personnages */}
      <div className={styles.navigationContainer}>
        <Link href={`/${prevCharacter}`}>
          <button className={`${styles.navArrow} ${styles.navArrowLeft}`}>
            ←
          </button>
        </Link>

        <Link href={`/${nextCharacter}`}>
          <button className={`${styles.navArrow} ${styles.navArrowRight}`}>
            →
          </button>
        </Link>
      </div>
    </>
  );
};

export default CharacterNavigation;