import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";

const MainPage = () => {
  return (
    <>
      <div>
        <h1>DOXU</h1>
        <YoutubeEmbed videoId='sSgyzHDuDkU' />
        <p>kegoengongorneognerngeoigneoignegengoegnergierngeigneigerigienog</p>
      </div>

      <div className={styles.menu}>
        <Link className={styles.char} href='/perso'>
          <Image
            className={styles.imgStyle}
            src='/sheer_2.png'
            alt='Perso 1'
            layout='intrinsic'
            width={1092}
            height={1538}
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

      <div>
        <img
          src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDgxeXI4bHI4NnBreWh5Nng4eGd2cnM0bm9wMmgzN2FsYnY2b3lxYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.gif'
          alt='GIF test'
        />
      </div>
    </>
  );
};

export default MainPage;
