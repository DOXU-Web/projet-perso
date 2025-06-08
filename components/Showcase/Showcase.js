"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Showcase.module.css";

const Showcase = () => {
  const characters = [
    {
      id: 1,
      name: "Sheer",
      class: "Guerrier",
      description:
        "Une combattante redoutable maîtrisant l'épée et le bouclier. Sa force légendaire fait trembler ses ennemis.",
      image: "perso_1.png",
      href: "/personnages/sheer",
    },
    {
      id: 2,
      name: "Sethj",
      class: "Mage",
      description: "Maître des arts mystiques, il manipule les éléments avec une précision inégalée.",
      image: "perso_2.png",
      href: "/personnages/sethj",
    },
    {
      id: 3,
      name: "Luna l'Assassin",
      class: "Assassin",
      description: "Rapide comme l'éclair, elle frappe dans l'ombre avant de disparaître sans laisser de trace.",
      image: "perso_1.png",
      href: "/personnages/luna",
    },
    {
      id: 4,
      name: "Thorin le Paladin",
      class: "Paladin",
      description: "Protecteur des innocents, il allie la puissance divine à sa force physique exceptionnelle.",
      image: "perso_2.png",
      href: "/personnages/thorin",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [slideDirection, setSlideDirection] = useState("next");
  const [outgoingIndex, setOutgoingIndex] = useState(null);

  const calculateVisibleCards = () => {
    const width = window.innerWidth;
    if (width >= 1200) return 3;
    if (width >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(calculateVisibleCards());
    };
    setVisibleCards(calculateVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextCharacter = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("next");
    setCurrentIndex((prev) => (prev + 1) % characters.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevCharacter = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleCharacterClick = (character) => {
    console.log("Personnage sélectionné:", character);
    // Navigation vers la page du personnage
    window.location.href = character.href;
  };

  const getVisibleCharacters = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % characters.length;
      visible.push(characters[index]);
    }
    return visible;
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Personnages Légendaires</h1>
        <p className={styles.subtitle}>Découvrez les héros de votre aventure</p>
      </div>

      <div className={styles.carouselContainer}>
        <button
          className={styles.navButton}
          onClick={() => {
            setAutoPlay(false);
            prevCharacter();
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className={`${styles.cardsContainer} ${isAnimating ? styles.cardsContainerAnimating : ""}`}
          onMouseEnter={() => setAutoPlay(false)}
        >
          {getVisibleCharacters().map((character, index) => {
            const isSelected = index === 0;
            return (
              <div
                key={`${character.id}-${currentIndex}-${index}`}
                className={`${styles.card} ${isSelected ? styles.selectedCard : ""} ${
                  isAnimating ? (slideDirection === "next" ? styles.slideNext : styles.slidePrev) : ""
                }`}
                onClick={() => handleCharacterClick(character)}
              >
                <div className={styles.imageContainer}>
                  <img className={styles.image} src={character.image} alt={character.name} />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.characterInfo}>
                    <h2 className={styles.characterName}>{character.name}</h2>
                    <p className={styles.characterClass}>{character.class}</p>
                  </div>
                  <p className={styles.characterDescription}>{character.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className={styles.navButton}
          onClick={() => {
            setAutoPlay(false);
            nextCharacter();
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Showcase;
