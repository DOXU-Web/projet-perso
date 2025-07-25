"use client";

import { useState, useEffect } from "react";

const CharacterDetail = ({ characterName, styles }) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les données du personnage
  const fetchCharacter = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/api/characters/");

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const characters = await response.json();

      // Trouver le personnage par nom (insensible à la casse)
      const foundCharacter = characters.find((char) => char.name.toLowerCase() === characterName.toLowerCase());

      if (foundCharacter) {
        setCharacter(foundCharacter);
        setError(null);
      } else {
        throw new Error(`Personnage "${characterName}" non trouvé`);
      }
    } catch (err) {
      console.error("Erreur lors de la récupération du personnage:", err);
      setError(err.message);

      // Données de fallback
      setCharacter({
        name: characterName,
        character_class: "Classe inconnue",
        detailed_description: "Description non disponible pour le moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, [characterName]);

  if (loading) {
    return (
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Chargement...</h1>
        <p className={styles.description}>Récupération des données...</p>
      </div>
    );
  }

  return (
    <div className={styles.contentContainer}>
      <h1 className={styles.title}>{character.name}</h1>
      <h2 className={styles.subtitle}>{character.character_class}</h2>
      <p className={styles.description}>
        {character.detailed_description || character.description || "Description non disponible."}
      </p>
      {error && <p style={{ color: "#ff6b6b", fontSize: "0.9rem", marginTop: "10px" }}>(Mode hors ligne - {error})</p>}
    </div>
  );
};

export default CharacterDetail;
