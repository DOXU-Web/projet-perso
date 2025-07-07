import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/logo/twitter.svg" alt="Twitter" className={styles.icon} />
          <span>Twitter</span>
        </a>
        <a href="https://patreon.com" target="_blank" rel="noopener noreferrer">
          <img src="/logo/patreon.svg" alt="Patreon" className={styles.icon} />
          <span>Patreon</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/logo/instagram.svg" alt="Instagram" className={styles.icon} />
          <span>Instagram</span>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/logo/youtube.svg" alt="YouTube" className={styles.icon} />
          <span>YouTube</span>
        </a>
      </div>
      <div className={styles.text1}>
        <p>Conditions générales d'utilisation</p>
        <p>Politique de confidentialité</p>
      </div>
      <p className={styles.text2}>© 2025 Doxu. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
