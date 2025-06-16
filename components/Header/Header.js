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
              Home
            </a>
            <a href="/" className={styles.navbarLink}>
              Perso
            </a>
            <a href="/" className={styles.navbarLink}>
              Gameplay
            </a>
            <a href="/" className={styles.navbarLink}>
              Contact
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
              Home
            </a>
            <a href="/" className={styles.navbarMobileLink}>
              Perso
            </a>
            <a href="/" className={styles.navbarMobileLink}>
              Gameplay
            </a>
            <a href="/" className={styles.navbarMobileLink}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
