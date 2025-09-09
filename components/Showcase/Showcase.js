// Showcase.js
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Showcase.module.css";

const Showcase = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Récupère les personnages depuis l'API
  const getCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/characters/`);
      const data = await response.json();

      const simpleCharacters = data.map((character) => ({
        id: character.id,
        name: character.name,
        class: character.character_class,
        image: character.image_url || "perso_default.png",
        href: `/${character.name.toLowerCase()}`,
      }));

      setCharacters(simpleCharacters);
    } catch (error) {
      console.log("Erreur API, utilisation des données de test");
      // Données de test sans description non plus
      setCharacters([
        { id: 1, name: "Sheer", class: "Guerrier", image: "perso_1.png", href: "/sheer" },
        { id: 2, name: "Sethj", class: "Mage", image: "perso_2.png", href: "/sethj" },
        { id: 3, name: "Sigg", class: "Assassin", image: "perso_3.png", href: "/sigg" },
      ]);
    }
    setLoading(false);
  };

  // Adapte le nombre de cartes selon la taille d'écran
  const updateCardsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setCardsToShow(3);
    } else if (screenWidth >= 768) {
      setCardsToShow(2);
    } else {
      setCardsToShow(1);
    }
  };

  useEffect(() => {
    getCharacters();
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Navigation carrousel
  const goNext = () => {
    const maxIndex = characters.length - cardsToShow;
    setCurrentIndex((i) => (i < maxIndex ? i + 1 : 0));
  };

  const goPrev = () => {
    const maxIndex = characters.length - cardsToShow;
    setCurrentIndex((i) => (i > 0 ? i - 1 : maxIndex));
  };

  // Personnages visibles
  const getVisibleCharacters = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      const idx = currentIndex + i;
      if (idx < characters.length) visible.push(characters[idx]);
    }
    return visible;
  };

  // Clic sur une carte
  const handleCharacterClick = (href) => {
    window.location.href = href;
  };

  // Chargement
  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Personnages Légendaires</h1>
          <p className={styles.subtitle}>Chargement des héros...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Personnages Légendaires</h1>
        <p className={styles.subtitle}>Découvrez les héros de votre aventure</p>
      </div>

      {/* Carousel */}
      <div className={styles.carouselContainer}>
        <button className={styles.navButton} onClick={goPrev}>
          ←
        </button>

        {/* Cartes visibles */}
        <div className={styles.cardsContainer}>
          {getVisibleCharacters().map((character) => (
            <div key={character.id} className={styles.card} onClick={() => handleCharacterClick(character.href)}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={character.image || "/perso_default.png"}
                  alt={character.name}
                  width={300}
                  height={400}
                />
                <div className={styles.imageOverlay}></div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.characterInfo}>
                  <h2 className={styles.characterName}>{character.name}</h2>
                  <p className={styles.characterClass}>{character.class}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.navButton} onClick={goNext}>
          →
        </button>
      </div>

      <div className={styles.ctaWrapper}>
        <button className={styles.ctaButton} onClick={() => (window.location.href = "/coming-soon")}>
          Coming Soon
        </button>
      </div>
    </div>
  );
};

export default Showcase;
