import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.menu}>
        <Link className={styles.char} href='/perso'>
          <Image
            className={styles.imgStyle}
            src='/Aphelios_banner.jpg'
            alt='Perso 1'
            layout='intrinsic'
            width={308}
            height={560}
          />
        </Link>

        <Link className={styles.char} href='/perso'>
          <Image
            className={styles.imgStyle}
            src='/Diana_banner.webp'
            alt='Perso 2'
            layout='intrinsic'
            width={308}
            height={560}
          />
        </Link>

        <Link className={styles.char} href='/perso'>
          <Image
            className={styles.imgStyle}
            src='/Jinx_banner.webp'
            alt='Perso 3'
            layout='intrinsic'
            width={308}
            height={560}
          />
        </Link>

        <Link className={styles.char} href='/perso'>
          <Image
            className={styles.imgStyle}
            src='/Vi_banner.webp'
            alt='Perso 4'
            layout='intrinsic'
            width={308}
            height={560}
          />
        </Link>
      </div>
    </>
  );
};

export default Home;
