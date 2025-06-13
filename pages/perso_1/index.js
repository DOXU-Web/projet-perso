import styles from "./index.module.css";
import Link from "next/link";

const Perso_1 = () => {
  return (
    <>
      <div className={styles.contentContainer}>
        <h1>Aphelios</h1>
        <h2>Arme des Lunaris</h2>
        <p>
          Aphelios Arme des Lunaris Aphelios Arme des Lunaris La lune, si lointaine et pourtant si incroyablement
          proche, élève au-dessus des pentes de imposant Mont Targon. Nés lors un rare phénomène de convergence lunaire,
          quand la lune physique est éclipsée par son reflet dans le royaume spirituel, Aphelios et sa sœur jumelle
          Alune étaient célébrés comme les enfants du destin par le culte targonien des Lunaris.
        </p>
      </div>

      <Link href="/#showcase" scroll={false}>
        <button>Back to menu</button>
      </Link>
    </>
  );
};

export default Perso_1;
