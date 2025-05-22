"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CharacterMenu.module.css";

const CharacterMenu = () => {
  const [showFuture, setShowFuture] = useState(false);

  const currentCharacters = [
    { name: "Perso 1", href: "/perso_1", img: "/sheer_2.png" },
    { name: "Perso 2", href: "/perso_2", img: "/sheer_2.png" },
    { name: "Perso 3", href: "/perso", img: "/sheer_2.png" },
    { name: "Perso 4", href: "/perso", img: "/sheer_2.png" },
  ];

  const futureCharacters = [
    { name: "Perso 5", img: "/sheer_2.png" },
    { name: "Perso 6", img: "/sheer_2.png" },
  ];

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        {currentCharacters.map((char, index) => (
          <Link className={styles.char} href={char.href} key={index}>
            <Image className={styles.imgStyle} src={char.img} alt={char.name} width={308} height={560} />
          </Link>
        ))}

        {showFuture &&
          futureCharacters.map((char, index) => (
            <div className={`${styles.char} ${styles.futureCard}`} key={`future-${index}`}>
              <Image
                className={styles.imgStyle}
                src={char.img}
                alt={`Futur personnage ${index + 1}`}
                width={308}
                height={560}
              />
              <span className={styles.comingSoon}>Bientôt</span>
            </div>
          ))}
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={() => setShowFuture(!showFuture)} className={styles.toggleButton}>
          {showFuture ? "Masquer les futurs personnages" : "Afficher les futurs personnages"}
        </button>
      </div>
    </div>
  );
};

export default CharacterMenu;
