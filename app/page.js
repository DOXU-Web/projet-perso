import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";
import GifGameplay from "../components/GifGameplay/GifGameplay";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import CharacterMenu from "../components/CharacterMenu/CharacterMenu";
import Test from "../components/Test/test";
import EmailForm from "@/components/EmailForm/EmailForm";
import ScrollButton from "@/components/ScrollButton/ScrollButton";
import ContentBlock from "@/components/ContentBlock/ContentBlock";

const MainPage = () => {
  return (
    <>
      <Header />

      <Banner imageSrc="/doxu_art.png" alt="test"></Banner>

      <ContentBlock imageSrc="/city.png" alt="test">
        <h2 className={styles.title}>Un monde épique t’attend</h2>
        <p className={styles.text}>
          Explore des territoires mystérieux et combats des ennemis redoutables.Sin autem ad adulescentiam perduxissent,
          dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non
          posset. Quod si qui longius in amicitia provecti essent, tamen saepe labefactari, si in honoris contentionem
          incidissent; pestem enim nullam maiorem esse amicitiis quam in plerisque pecuniae cupiditatem, in optimis
          quibusque honoris certamen et gloriae; ex quo inimicitias maximas saepe inter amicissimos exstitisse."
        </p>
        <YoutubeEmbed videoId="sSgyzHDuDkU" />
      </ContentBlock>

      <ContentBlock imageSrc="/loading_controls.png">
        <h2 className={styles.title}>1 VS 1</h2>
        <p className={styles.text}>
          Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum et Eusebium nec professionem nec
          dignitatem ostendens aliquotiens increpabat, qui sint hi magna quaerebatur industria, et nequid intepesceret,
          Epigonus e Lycia philosophus ducitur et Eusebius ab Emissa Pittacas cognomento, concitatus orator, cum
          quaestor non hos sed tribunos fabricarum insimulasset promittentes armorum si novas res agitari conperissent.
        </p>

        <h2 className={styles.title}>2 VS 2</h2>
        <p className={styles.text}>
          Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum et Eusebium nec professionem nec
          dignitatem ostendens aliquotiens increpabat, qui sint hi magna quaerebatur industria, et nequid intepesceret,
          Epigonus e Lycia philosophus ducitur et Eusebius ab Emissa Pittacas cognomento, concitatus orator, cum
          quaestor non hos sed tribunos fabricarum insimulasset promittentes armorum si novas res agitari conperissent.
        </p>

        <h2 className={styles.title}>Exemple des mécaniques du jeu</h2>
        <div className={styles.gifStyle}>
          <GifGameplay gifUrl="/back_med_air.gif" altText="Back Med Air" />
          <GifGameplay gifUrl="/fwrd_med.gif" altText="Test" />
          <GifGameplay gifUrl="/jump_walk.gif" altText="Test" />
          <GifGameplay gifUrl="/shuiro.gif" altText="Test" />
        </div>
      </ContentBlock>

      <ContentBlock imageSrc="/ombre.png">
        <CharacterMenu />
      </ContentBlock>

      <ContentBlock imageSrc="/banner.png">
        <EmailForm />
      </ContentBlock>

      {/*<div className={styles.menu}>
        <Link className={styles.char} href="/perso_1">
          <Image className={styles.imgStyle} src="/sheer_2.png" alt="Perso 1" width={1092} height={1538} />
        </Link>

        <Link className={styles.char} href="/perso_2">
          <Image className={styles.imgStyle} src="/sheer_2.png" alt="Perso 2" width={308} height={560} />
        </Link>

        <Link className={styles.char} href="/perso">
          <Image className={styles.imgStyle} src="/sheer_2.png" alt="Perso 3" width={308} height={560} />
        </Link>

        <Link className={styles.char} href="/perso">
          <Image className={styles.imgStyle} src="/sheer_2.png" alt="Perso 4" width={308} height={560} />
        </Link>
      </div>*/}

      <ScrollButton />

      <Test />
    </>
  );
};

export default MainPage;
