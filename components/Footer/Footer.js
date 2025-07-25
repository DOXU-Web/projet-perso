import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://twitter.com" target="_blank">
          <Image src="/logo/twitter.svg" alt="Twitter" className={styles.icon} width={24} height={24} />
          <span>Twitter</span>
        </a>
        <a href="https://patreon.com" target="_blank">
          <Image src="/logo/patreon.svg" alt="Patreon" className={styles.icon} width={24} height={24} />
          <span>Patreon</span>
        </a>
        <a href="https://instagram.com" target="_blank">
          <Image src="/logo/instagram.svg" alt="Instagram" className={styles.icon} width={24} height={24} />
          <span>Instagram</span>
        </a>
        <a href="https://youtube.com" target="_blank">
          <Image src="/logo/youtube.svg" alt="YouTube" className={styles.icon} width={24} height={24} />
          <span>YouTube</span>
        </a>
      </div>
      <div className={styles.text1}>
        <p>Conditions générales d'utilisation</p>
        <p>Politique de confidentialité</p>
      </div>
      <p className={styles.text2}>© 2025 DeadBat Studio. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
