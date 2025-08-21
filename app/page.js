// React/Next.js
import Image from "next/image";

// Styles
import styles from "./page.module.css";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import ScrollButton from "../components/ScrollButton/ScrollButton";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import Showcase from "../components/Showcase/Showcase";
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";
import GifGameplay from "../components/GifGameplay/GifGameplay";

const MainPage = () => {
  return (
    <>
      <Header />

      <Banner id="download" imageSrc="/doxu_art.png" alt="Banner download"></Banner>

      <ContentBlock id="trailer" imageSrc="/loading_controls.png" alt="Trailer">
        <h1 className={styles.title}>TRAILER</h1>
        <p className={styles.text}>
          Explore des territoires mystérieux et combats des ennemis redoutables.Sin autem ad adulescentiam perduxissent,
          dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non
          posset. Quod si qui longius in amicitia provecti essent, tamen saepe labefactari, si in honoris contentionem
          incidissent; pestem enim nullam maiorem esse amicitiis quam in plerisque pecuniae cupiditatem, in optimis
          quibusque honoris certamen et gloriae; ex quo inimicitias maximas saepe inter amicissimos exstitisse."
        </p>
        <YoutubeEmbed videoId="JdPybY2bXDo" />
      </ContentBlock>

      <ContentBlock id="showcase" imageSrc="/fond3.png" alt="Showcase">
        <Showcase />
      </ContentBlock>

      <ContentBlock id="gameplay" imageSrc="/fond5.png" alt="Gameplay">
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
          <GifGameplay gifUrl="/back_med_air.gif" altText="Gif 1" />
          <GifGameplay gifUrl="/fwrd_med.gif" altText="Gif 2" />
          <GifGameplay gifUrl="/jump_walk.gif" altText="Gif 3" />
          <GifGameplay gifUrl="/shuiro.gif" altText="Gif 4" />
        </div>
      </ContentBlock>

      <ContentBlock id="story" imageSrc="/fond1.png" alt="Story">
        <h2 className={styles.title}>STORY</h2>
        <p className={styles.text}>
          Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum et Eusebium nec professionem nec
          dignitatem ostendens aliquotiens increpabat, qui sint hi magna quaerebatur industria, et nequid intepesceret,
          Epigonus e Lycia philosophus ducitur et Eusebius ab Emissa Pittacas cognomento, concitatus orator, cum
          quaestor non hos sed tribunos fabricarum insimulasset promittentes armorum si novas res agitari conperissent.
        </p>
      </ContentBlock>

      <ContentBlock id="support" imageSrc="/fond2.png" alt="Support">
        <h2 className={styles.title}>NOUS SOUTENIR</h2>
        <p className={styles.text}>
          Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum et Eusebium nec professionem nec
          dignitatem ostendens aliquotiens increpabat, qui sint hi magna quaerebatur industria, et nequid intepesceret,
          Epigonus e Lycia philosophus ducitur et Eusebius ab Emissa Pittacas cognomento, concitatus orator, cum
          quaestor non hos sed tribunos fabricarum insimulasset promittentes armorum si novas res agitari conperissent.
        </p>
      </ContentBlock>

      <ContentBlock id="staff" imageSrc="/fond4.png" alt="Staff">
        <h2 className={styles.title}>STAFF</h2>
        <p className={styles.text}>
          Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum et Eusebium nec professionem nec
          dignitatem ostendens aliquotiens increpabat, qui sint hi magna quaerebatur industria, et nequid intepesceret,
          Epigonus e Lycia philosophus ducitur et Eusebius ab Emissa Pittacas cognomento, concitatus orator, cum
          quaestor non hos sed tribunos fabricarum insimulasset promittentes armorum si novas res agitari conperissent.
        </p>
      </ContentBlock>

      <ContentBlock imageSrc="/banner.png" alt="test">
        <p>TEST</p>
      </ContentBlock>

      <ScrollButton />

      <Footer />
    </>
  );
};

export default MainPage;
