"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
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
              {isClick ? (
                <svg
                  className={styles.navbarIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className={styles.navbarIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
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

export default Navbar;
