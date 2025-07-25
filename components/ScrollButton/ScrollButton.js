"use client";

// Styles
import styles from "./ScrollButton.module.css";

const ScrollButton = () => {
  // Fonction simple pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Bouton toujours visible (plus simple pour débutant)
  return (
    <button className={styles.scrollToTop} onClick={scrollToTop}>
      ↑
    </button>
  );
};

export default ScrollButton;
