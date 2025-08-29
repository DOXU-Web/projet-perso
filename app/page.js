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
          DOXU is a French indie 2D 2V2 fighting game currently in development by DeadBat. The game features a roster of
          lunatic battle mages, offering fast-paced combat and insane moves. You can download the latest alpha version
          lower on this page.
        </p>
        <YoutubeEmbed videoId="JdPybY2bXDo" />
      </ContentBlock>

      <ContentBlock id="showcase" imageSrc="/fond3.png" alt="Showcase">
        <Showcase />
      </ContentBlock>

      <ContentBlock id="gameplay" imageSrc="/fond5.png" alt="Gameplay">
        <h2 className={styles.title}>Features</h2>
        <ul className={styles.text}>
          <li>
            • <span className={styles.gameplayTitle}>Narrative Rounds System</span> : The match can be divided into up
            to 3 Acts, each having their own quirks. DUO characters evolve during those Acts, as SOLO characters get
            access to Rage and powerful Synergies.
          </li>
          <br></br>
          <li>
            • <span className={styles.gameplayTitle}>Duo Characters</span> : Two controllers, one character. Insanely
            powerful, very.
          </li>
          <br></br>
          <li>
            • <span className={styles.gameplayTitle}>Meter System</span> : Characters have up to 3 bars of meter, used
            for Ultimate moves.
          </li>
          <br></br>
          <li>
            • <span className={styles.gameplayTitle}>Edge System</span> : Each character has their own Edge, a unique
            mechanic defining their playstyle at the cost of Edge bar.
          </li>
          <br></br>
          <li>
            • <span className={styles.gameplayTitle}>Synergy System</span> : Using the Synergy ressource, your team mate
            can appear at any given moment to input any move of their movelist, or switch with your character. When
            their character is defeated, they get access to uniquely powerful assists, offering a broad range of
            possibilities.
          </li>
          <br></br>
          <li>
            • <span className={styles.gameplayTitle}>Special guard and Tech</span> : Each character have their own
            special guard, offering various defensive options. A Tech system allows to get out of combos, but be careful
            of reads !
          </li>
          <br></br>
          <li>
            • <span className={styles.gameplayTitle}>Grab and Cross-Ups</span> : DOXU characters either have access to a
            Grab or a Cross-Up dash, allowing for different ways of mixing the opponent.
          </li>
          <br></br>
          <li>
            • <span className={styles.gameplayTitle}>Special Properties</span> : Moves can have properties like Counter
            Hit, Knockdown/Hard Knockdown, Armor, Parry, Invincible (and more !) impacting how opponents react to
            attacks.
          </li>
          <br></br>
        </ul>

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
          The story mode of DOXU, like in many fighting games, serves as an introduction to the game's mechanics.
          However, unlike most, it focuses primarily on the narrative and the lore of the game's universe.
        </p>

        <br />

        <p className={styles.text}>
          We follow the story of Izan and Sadara, two novice mages who have just completed their studies in History.
          Driven by their desire to learn more about magic, they team up and set out to explore Tetratalma. But their
          past is complicated, and soon Sadara, the lightning mage, hatches a terrible plan. She notices that her
          companion's powers grow as his mental state deteriorates. Trick after trick, she drags him deeper into the
          condition he suffers from, schizophrenia.
        </p>

        <br />

        <p className={styles.text}>
          Players will need to learn to play a double game. To ensure the survival of their characters, they will have
          to make compromises: first, because the lightning mage has not yet mastered combat, and then because the sound
          mage struggles with social interactions. On one hand, it's a twisted quest for knowledge; on the other, a
          powerful portrayal of schizophrenia.
        </p>

        <br />

        <p className={styles.text}>
          In this story, which can only be played in co-op, cooperation is essential, but not only that! Since the story
          is asymmetrical for the two players, they will be encouraged at the start of the mode not to share all the
          information they discover during their individual phases. The goal is to create new narrative interactions
          both within the game and in real life.
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
