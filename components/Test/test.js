import styles from "./test.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/logo/icons8-twitter-entouré.svg" className={styles.icon} />
          <span>Twitter</span>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/logo/icons8-facebook-circled.svg" className={styles.icon} />
          <span>Facebook</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="logo/icons8-instagram.svg" className={styles.icon} />
          <span>Instagram</span>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/logo/icons8-youtube.svg" className={styles.icon} />
          <span>YouTube</span>
        </a>
      </div>
      <p className={styles.text}>© 2025 Doxu. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
