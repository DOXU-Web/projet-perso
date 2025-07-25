"use client";

// React/Next.js
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Styles
import styles from "./Showcase.module.css";

const Showcase = () => {
  // États simples pour un débutant
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1); // Nombre de cartes à afficher

  // Fonction simple pour récupérer les personnages
  const getCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/api/characters/");
      const data = await response.json();
      
      // Transformer les données simplement
      const simpleCharacters = data.map((character) => {
        return {
          id: character.id,
          name: character.name,
          class: character.character_class,
          description: character.description,
          image: character.image_url || "perso_default.png",
          href: `/${character.name.toLowerCase()}`,
        };
      });
      
      setCharacters(simpleCharacters);
    } catch (error) {
      console.log("Erreur API, utilisation des données de test");
      // Données de test si l'API ne marche pas
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
    }
    setLoading(false);
  };

  // Fonction pour adapter le nombre de cartes selon la taille d'écran
  const updateCardsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setCardsToShow(3); // 3 cartes sur grand écran
    } else if (screenWidth >= 768) {
      setCardsToShow(2); // 2 cartes sur écran moyen
    } else {
      setCardsToShow(1); // 1 carte sur mobile
    }
  };

  // Charger les données au démarrage
  useEffect(() => {
    getCharacters();
    updateCardsToShow(); // Vérifier la taille d'écran au démarrage
    
    // Écouter les changements de taille d'écran
    window.addEventListener('resize', updateCardsToShow);
    
    // Nettoyer l'écouteur quand le composant se ferme
    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, []);

  // Fonctions simples pour le carousel
  const goNext = () => {
    const maxIndex = characters.length - cardsToShow;
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Retour au début
    }
  };

  const goPrev = () => {
    const maxIndex = characters.length - cardsToShow;
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);  
    } else {
      setCurrentIndex(maxIndex); // Aller à la fin
    }
  };

  // Aller directement à un personnage
  const goToCharacter = (index) => {
    const maxIndex = characters.length - cardsToShow;
    if (index <= maxIndex) {
      setCurrentIndex(index);
    }
  };

  // Fonction pour obtenir les personnages à afficher
  const getVisibleCharacters = () => {
    const visibleChars = [];
    for (let i = 0; i < cardsToShow; i++) {
      const charIndex = currentIndex + i;
      if (charIndex < characters.length) {
        visibleChars.push(characters[charIndex]);
      }
    }
    return visibleChars;
  };

  // Fonction pour cliquer sur un personnage
  const handleCharacterClick = (href) => {
    window.location.href = href;
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

  return (
    <div className={styles.container}>
      {/* Titre */}
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Personnages Légendaires</h1>
        <p className={styles.subtitle}>Découvrez les héros de votre aventure</p>
      </div>

      {/* Carousel */}
      <div className={styles.carouselContainer}>
        {/* Bouton Précédent */}
        <button className={styles.navButton} onClick={goPrev}>
          ←
        </button>

        {/* Cartes des personnages visibles */}
        <div className={styles.cardsContainer}>
          {getVisibleCharacters().map((character) => (
            <div 
              key={character.id}
              className={styles.card} 
              onClick={() => handleCharacterClick(character.href)}
            >
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
                <p className={styles.characterDescription}>{character.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Suivant */}
        <button className={styles.navButton} onClick={goNext}>
          →
        </button>
      </div>


      {/* Bouton Coming Soon */}
      <div className={styles.ctaWrapper}>
        <button 
          className={styles.ctaButton} 
          onClick={() => window.location.href = "/coming-soon"}
        >
          Coming Soon
        </button>
      </div>
    </div>
  );
};

export default Showcase;