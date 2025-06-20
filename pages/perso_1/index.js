import styles from "./index.module.css";
import Link from "next/link";

const Perso_2 = () => {
  return (
    <>
      {/* Bouton de retour */}
      <Link href="/#showcase" scroll={false}>
        <button className={styles.backButton}>Back</button>
      </Link>

      {/* Bloc de texte à gauche */}
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Aphelios</h1>
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

      {/* Première image - vous pouvez changer sa position dans le CSS */}
      <img src="/sheer2.png" alt="Aphelios 1" className={styles.image1} />
    </>
  );
};

export default Perso_2;
