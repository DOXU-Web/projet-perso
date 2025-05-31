"use client";

import { useState, useEffect } from "react";
import styles from "./ScrollButton.module.css";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button className={styles.scrollToTop} onClick={scrollToTop} aria-label="Remonter en haut">
        ↑
      </button>
    )
  );
};

export default ScrollButton;
