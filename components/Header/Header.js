"use client";

// React/Next.js
import React, { useState } from "react";
import Image from "next/image";

// Styles
import styles from "./Header.module.css";

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarContent}>
          <div className={styles.navbarLogoSection}>
            <div className={styles.navbarLogo}>
              <a href="/">
                <Image src="/doxu_logo.png" alt="Doxu logo" width={200} height={200} />
              </a>
            </div>
          </div>

          <div className={styles.navbarMenuDesktop}>
            <a href="/" className={styles.navbarLink}>
              Download
            </a>
            <a href="/#trailer" className={styles.navbarLink}>
              Trailer
            </a>
            <a href="/#showcase" className={styles.navbarLink}>
              Characters
            </a>
            <a href="/#gameplay" className={styles.navbarLink}>
              Gameplay
            </a>
            <a href="/#story" className={styles.navbarLink}>
              Story
            </a>
            <a href="/#support" className={styles.navbarLink}>
              Support
            </a>
            <a href="/#staff" className={styles.navbarLink}>
              Staff
            </a>
          </div>

          <div className={styles.navbarMobileButtonContainer}>
            <button className={styles.navbarMobileButton} onClick={toggleNavbar}>
              {isClick ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MENU MOBILE avec transition */}
        <div className={`${styles.navbarMobileMenu} ${isClick ? styles.navbarMobileMenuOpen : ""}`}>
          <div className={styles.navbarMobileMenuContent}>
            <a href="/" className={styles.navbarMobileLink}>
              Download
            </a>
            <a href="/#trailer" className={styles.navbarMobileLink}>
              Trailer
            </a>
            <a href="/#showcase" className={styles.navbarMobileLink}>
              Characters
            </a>
            <a href="/#gameplay" className={styles.navbarMobileLink}>
              Gameplay
            </a>
            <a href="/#story" className={styles.navbarMobileLink}>
              Story
            </a>
            <a href="/#support" className={styles.navbarMobileLink}>
              Support
            </a>
            <a href="/#staff" className={styles.navbarMobileLink}>
              Staff
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
