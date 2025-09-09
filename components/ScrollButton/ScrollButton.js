"use client";

import styles from "./ScrollButton.module.css";

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={styles.scrollToTop} onClick={scrollToTop}>
      ↑
    </button>
  );
};

export default ScrollButton;
