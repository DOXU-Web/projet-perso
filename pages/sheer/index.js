import styles from "./index.module.css";
import Link from "next/link";
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail";

const Sheer = () => {
  return (
    <>
      {/* Bouton de retour */}
      <Link href="/#showcase" scroll={false}>
        <button className={styles.backButton}>Back</button>
      </Link>

      {/* Flèches de navigation */}
      <div className={styles.navigationContainer}>
        {/* Flèche gauche */}
        <Link href="/sigg" scroll={false}>
          <button className={styles.navArrow + " " + styles.navArrowLeft}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </Link>

        {/* Flèche droite */}
        <Link href="/sethj" scroll={false}>
          <button className={styles.navArrow + " " + styles.navArrowRight}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </Link>
      </div>

      {/* Utilisation du nouveau composant */}
      <CharacterDetail characterName="Sheer" styles={styles} />

      {/* Image du personnage */}
      <img src="/sheer2.png" alt="Sheer Splash" className={styles.image1} />
    </>
  );
};

export default Sheer;
