import Image from "next/image";
import styles from "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <nav>
          <ul>
            <li className="header-logo">
              <Image src="/doxu_logo.png" alt="Doxu logo" layout="intrinsic" width={150} height={150} />
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Perso</a>
            </li>
            <li>
              <a href="#">Gameplay</a>
            </li>
            <li>
              <a href="#">Lore</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <span className="material-icons">menu</span>
            </li>
          </ul>

          <ul className="sidebar">
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Perso</a>
            </li>
            <li>
              <a href="#">Gameplay</a>
            </li>
            <li>
              <a href="#">Lore</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
