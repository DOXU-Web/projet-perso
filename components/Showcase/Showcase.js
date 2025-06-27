"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Showcase.module.css";
import { useRouter } from "next/navigation";

const Showcase = () => {
  const router = useRouter();

  const characters = [
    {
      id: 1,
      name: "Sheer",
      class: "Guerrier",
      description: "Maîtrise de l'épée.",
      image: "perso_1.png",
      href: "/sheer",
    },
    { id: 2, name: "Sethj", class: "Mage", description: "Pouvoirs mystiques.", image: "perso_2.png", href: "/sethj" },
    {
      id: 3,
      name: "Sigg",
      class: "Assassin",
      description: "Frappe dans l’ombre.",
      image: "perso_3.png",
      href: "/sigg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;
      if (width >= 1200) setVisibleCards(3);
      else if (width >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % characters.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
    setTimeout(() => setIsAnimating(false), 400);
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
        {visibleCards < 3 && (
          <button className={styles.navButton} onClick={prev}>
            <ChevronLeft size={24} />
          </button>
        )}

        <div className={`${styles.cardsContainer} ${isAnimating ? styles.slide : ""}`}>
          {getVisibleCharacters().map((char) => (
            <div key={char.id} className={styles.card} onClick={() => (window.location.href = char.href)}>
              <div className={styles.imageContainer}>
                <img className={styles.image} src={char.image} alt={char.name} />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.characterInfo}>
                  <h2 className={styles.characterName}>{char.name}</h2>
                  <p className={styles.characterClass}>{char.class}</p>
                </div>
                <p className={styles.characterDescription}>{char.description}</p>
              </div>
            </div>
          ))}
        </div>

        {visibleCards < 3 && (
          <button className={styles.navButton} onClick={next}>
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      <div className={styles.ctaWrapper}>
        <button className={styles.ctaButton} onClick={() => router.push("/coming-soon")}>
          Coming Soon
        </button>
      </div>
    </div>
  );
};

export default Showcase;
