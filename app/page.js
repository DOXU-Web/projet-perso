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

const MainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Test />

      {/*<Image className={styles.banner} src="/doxu_art.png" alt="Doxu art" width={1280} height={720} />*/}

      <div className={styles.videoTexte}>
        <YoutubeEmbed videoId="sSgyzHDuDkU" />
        <p>
          Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi
          alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent, tamen saepe
          labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis quam in
          plerisque pecuniae cupiditatem, in optimis quibusque honoris certamen et gloriae; ex quo inimicitias maximas
          saepe inter amicissimos exstitisse.
        </p>
      </div>

      <CharacterMenu />

      <div className={styles.menu}>
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
      </div>

      <div>
        <h2>1VS1</h2>
        <p>
          Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum et Eusebium nec professionem nec
          dignitatem ostendens aliquotiens increpabat, qui sint hi magna quaerebatur industria, et nequid intepesceret,
          Epigonus e Lycia philosophus ducitur et Eusebius ab Emissa Pittacas cognomento, concitatus orator, cum
          quaestor non hos sed tribunos fabricarum insimulasset promittentes armorum si novas res agitari conperissent.
        </p>

        <h2>2VS2</h2>
        <p>
          Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum et Eusebium nec professionem nec
          dignitatem ostendens aliquotiens increpabat, qui sint hi magna quaerebatur industria, et nequid intepesceret,
          Epigonus e Lycia philosophus ducitur et Eusebius ab Emissa Pittacas cognomento, concitatus orator, cum
          quaestor non hos sed tribunos fabricarum insimulasset promittentes armorum si novas res agitari conperissent.
        </p>
        <div className={styles.loreStyle}>
          <h2>Exemple des mécaniques du jeu</h2>

          <div className={styles.gifStyle}>
            <GifGameplay gifUrl="/back_med_air.gif" altText="Back Med Air" />
            <GifGameplay gifUrl="/fwrd_med.gif" altText="Test" />
            <GifGameplay gifUrl="/jump_walk.gif" altText="Test" />
            <GifGameplay gifUrl="/shuiro.gif" altText="Test" />
          </div>
        </div>

        <div className={styles.loreStyle}>
          <h2>Mode histoire + Lore</h2>
          <p>
            Novitates autem si spem adferunt, ut tamquam in herbis non fallacibus fructus appareat, non sunt illae
            quidem repudiandae, vetustas tamen suo loco conservanda; maxima est enim vis vetustatis et consuetudinis.
            Quin in ipso equo, cuius modo feci mentionem, si nulla res impediat, nemo est, quin eo, quo consuevit,
            libentius utatur quam intractato et novo. Nec vero in hoc quod est animal, sed in iis etiam quae sunt
            inanima, consuetudo valet, cum locis ipsis delectemur, montuosis etiam et silvestribus, in quibus diutius
            commorati sumus.
          </p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
