import Image from "next/image";
import styles from "./perso.module.css";

const Perso = () => {
  return (
    <>
      <div>
        <h1>Aphelios</h1>
        <h2>Arme des Lunaris</h2>
        <p>
          Aphelios Arme des Lunaris Aphelios Arme des Lunaris La lune, si lointaine et pourtant si incroyablement
          proche, élève au-dessus des pentes de imposant Mont Targon. Nés lors un rare phénomène de convergence lunaire,
          quand la lune physique est éclipsée par son reflet dans le royaume spirituel, Aphelios et sa sœur jumelle
          Alune étaient célébrés comme les enfants du destin par le culte targonien des Lunaris.
        </p>
        <Image
          className={styles.imgStyle}
          src='/Aphelios_banner.jpg'
          alt='Perso 1'
          layout='intrinsic'
          width={308}
          height={560}
        />
      </div>
    </>
  );
};

export default Perso;
