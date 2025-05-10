import Image from "next/image";
import styles from "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Image src="/doxu_logo.png" alt="Doxu logo" width={500} height={500} />
      <nav>
        <ul>
          <li>Conditions générales d&apos;utilisation</li>
          <li>Politique de confidentialité</li>
          <li>Nous soutenir sur Patreon</li>
          <li>Contact</li>
        </ul>
      </nav>

      <p>© Doxu 2025</p>
    </footer>
  );
};

export default Footer;
