"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Showcase.module.css";
import { useRouter } from "next/navigation";

const Showcase = () => {
  const router = useRouter();

  // State pour stocker les personnages depuis l'API
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fonction pour récupérer les personnages depuis l'API Django
  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/api/characters/");

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();

      // Transformer les données pour correspondre à votre format actuel
      const transformedData = data.map((character) => ({
        id: character.id,
        name: character.name,
        class: character.character_class,
        description: character.description,
        image: character.image_url || "perso_default.png",
        href: `/${character.name.toLowerCase()}`,
      }));

      setCharacters(transformedData);
      setError(null);
    } catch (err) {
      console.error("Erreur lors de la récupération des personnages:", err);
      setError(err.message);

      // En cas d'erreur, utiliser les données de fallback
      setCharacters([
        {
          id: 1,
          name: "Sheer",
          class: "Guerrier",
          description: "Maîtrise de l'épée.",
          image: "perso_1.png",
          href: "/sheer",
        },
        {
          id: 2,
          name: "Sethj",
          class: "Mage",
          description: "Pouvoirs mystiques.",
          image: "perso_2.png",
          href: "/sethj",
        },
        {
          id: 3,
          name: "Sigg",
          class: "Assassin",
          description: "Frappe dans l'ombre.",
          image: "perso_3.png",
          href: "/sigg",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Charger les personnages au montage du composant
  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;
      let newVisibleCards;
      if (width >= 1200) newVisibleCards = 3;
      else if (width >= 768) newVisibleCards = 2;
      else newVisibleCards = 1;

      // Si le nombre de cartes visibles change, réajuster l'index
      if (newVisibleCards !== visibleCards) {
        setVisibleCards(newVisibleCards);

        // Calculer le nouvel index maximum avec le nouveau nombre de cartes
        const newMaxIndex = Math.max(0, characters.length - newVisibleCards);

        // Réajuster currentIndex si nécessaire pour éviter le débordement
        setCurrentIndex((prevIndex) => Math.min(prevIndex, newMaxIndex));
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, [visibleCards, characters.length]); // Ajouter les dépendances

  // Calculer si on a besoin des flèches de navigation
  const needsNavigation = characters.length > visibleCards;

  // Calculer l'index maximum pour éviter les espaces vides
  const maxIndex = Math.max(0, characters.length - visibleCards);

  // Fonction pour réajuster l'index si nécessaire
  const adjustCurrentIndex = () => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  };

  // Réajuster l'index quand les personnages ou visibleCards changent
  useEffect(() => {
    adjustCurrentIndex();
  }, [characters.length, visibleCards, maxIndex]);

  const next = () => {
    if (isAnimating || characters.length === 0 || !needsNavigation) return;
    setIsAnimating(true);

    // Si on est au maximum, revenir au début (carousel infini)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

    setTimeout(() => setIsAnimating(false), 400);
  };

  const prev = () => {
    if (isAnimating || characters.length === 0 || !needsNavigation) return;
    setIsAnimating(true);

    // Si on est au début, aller à la fin (carousel infini)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

    setTimeout(() => setIsAnimating(false), 400);
  };

  const getVisibleCharacters = () => {
    if (characters.length === 0) return [];

    const visible = [];
    for (let i = 0; i < Math.min(visibleCards, characters.length); i++) {
      const index = (currentIndex + i) % characters.length;
      visible.push(characters[index]);
    }
    return visible;
  };

  // Affichage pendant le chargement
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

  // Affichage en cas d'erreur (avec données de fallback)
  if (error) {
    console.warn("Utilisation des données de fallback:", error);
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Personnages Légendaires</h1>
        <p className={styles.subtitle}>
          Découvrez les héros de votre aventure
          {error && <span style={{ color: "#f97316", fontSize: "0.8rem" }}> (Mode hors ligne)</span>}
        </p>
      </div>

      <div className={styles.carouselContainer}>
        {/* Flèche gauche - Affichée seulement si nécessaire */}
        {needsNavigation && (
          <button className={styles.navButton} onClick={prev} aria-label="Personnage précédent">
            <ChevronLeft size={24} />
          </button>
        )}

        <div className={`${styles.cardsContainer} ${isAnimating ? styles.slide : ""}`}>
          {getVisibleCharacters().map((char) => (
            <div key={char.id} className={styles.card} onClick={() => (window.location.href = char.href)}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src={char.image}
                  alt={char.name}
                  onError={(e) => {
                    e.target.src = "perso_default.png";
                  }}
                />
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

        {/* Flèche droite - Affichée seulement si nécessaire */}
        {needsNavigation && (
          <button className={styles.navButton} onClick={next} aria-label="Personnage suivant">
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Indicateurs de navigation (optionnel) */}
      {needsNavigation && characters.length > 0 && (
        <div className={styles.indicators}>
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ""}`}
              onClick={() => {
                if (!isAnimating) {
                  setCurrentIndex(index);
                }
              }}
              aria-label={`Aller à la page ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className={styles.ctaWrapper}>
        <button className={styles.ctaButton} onClick={() => router.push("/coming-soon")}>
          Coming Soon
        </button>
      </div>
    </div>
  );
};

export default Showcase;
