import styles from "./index.module.css";
import Link from "next/link";

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
        <Link href="/sethj" scroll={false}>
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
        <Link href="/sheer" scroll={false}>
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

      {/* Bloc de texte à gauche */}
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Sigg</h1>
        <h2 className={styles.subtitle}>Arme des Lunaris</h2>
        <p className={styles.description}>
          Aphelios Arme des Lunaris Aphelios Arme des Lunaris La lune, si lointaine et pourtant si incroyablement
          proche, élève au-dessus des pentes de imposant Mont Targon. Nés lors un rare phénomène de convergence lunaire,
          quand la lune physique est éclipsée par son reflet dans le royaume spirituel, Aphelios et sa sœur jumelle
          Alune étaient célébrés comme les enfants du destin par le culte targonien des Lunaris. Aphelios Arme des
          Lunaris Aphelios Arme des Lunaris La lune, si lointaine et pourtant si incroyablement proche, élève au-dessus
          des pentes de imposant Mont Targon. Nés lors un rare phénomène de convergence lunaire, quand la lune physique
          est éclipsée par son reflet dans le royaume spirituel, Aphelios et sa sœur jumelle Alune étaient célébrés
          comme les enfants du destin par le culte targonien des Lunaris.
        </p>
      </div>

      {/* Image du personnage */}
      <img src="/sigg.png" alt="Sigg Splash" className={styles.image1} />
    </>
  );
};

export default Sheer;
