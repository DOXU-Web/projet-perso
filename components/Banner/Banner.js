import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.hero}>
      <Image src="/doxu_art.png" alt="Doxu art" layout="fill" objectFit="cover" className={styles.heroImg} priority />
    </section>
  );
};

export default Banner;
