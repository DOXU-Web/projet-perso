import Image from "next/image";
import styles from "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Image
        src="/doxu_logo.png"
        alt="Doxu logo"
        layout="intrinsic"
        width={500}
        height={500}
      />

      <ul>
        <li>Conditions générales d&apos;utilisation</li>
        <li>Politique de confidentialité</li>
        <li>Nous soutenir sur Patreon</li>
        <li>Contact</li>
      </ul>

      <p>© Doxu 2025</p>
    </footer>
  );
};

export default Footer;
