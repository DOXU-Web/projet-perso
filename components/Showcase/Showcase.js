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
    },
    {
      id: 2,
      name: "Sethj",
      class: "Mage",
      description: "Maître des arts mystiques, il manipule les éléments avec une précision inégalée.",
      image: "perso_2.png",
    },
    {
      id: 3,
      name: "Luna l'Assassin",
      class: "Assassin",
      description: "Rapide comme l'éclair, elle frappe dans l'ombre avant de disparaître sans laisser de trace.",
      image: "perso_1.png",
    },
    {
      id: 4,
      name: "Thorin le Paladin",
      class: "Paladin",
      description: "Protecteur des innocents, il allie la puissance divine à sa force physique exceptionnelle.",
      image: "perso_2.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

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
    setCurrentIndex((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const handleCharacterClick = (character) => {
    console.log("Personnage sélectionné:", character);
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
        <button className={styles.navButton} onClick={prevCharacter}>
          <ChevronLeft size={24} />
        </button>

        <div className={styles.cardsContainer}>
          {getVisibleCharacters().map((character, index) => {
            const isSelected = index === 0;
            return (
              <div
                key={character.id}
                className={`${styles.card} ${isSelected ? styles.selectedCard : ""}`}
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

        <button className={styles.navButton} onClick={nextCharacter}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className={styles.indicators}>
        {characters.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
