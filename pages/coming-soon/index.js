import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.css";

const ComingSoon = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (character) => {
    setSelectedImage(character);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  const upcomingCharacters = [
    {
      id: 1,
      name: "Blood Girl",
      image: "/coming-soon/blood girl.png",
      description: "Maîtresse des arts sombres",
    },
    {
      id: 2,
      name: "Earth Granny",
      image: "/coming-soon/earth granny.png",
      description: "Gardienne de la terre",
    },
    {
      id: 3,
      name: "Fire Girl",
      image: "/coming-soon/fire girl.png",
      description: "Contrôleuse des flammes",
    },
    {
      id: 4,
      name: "Soul Boy",
      image: "/coming-soon/soul boy.png",
      description: "Maître des âmes",
    },
    {
      id: 5,
      name: "Thunder Girl",
      image: "/coming-soon/thunder girl.png",
      description: "Manipulatrice de la foudre",
    },
    {
      id: 6,
      name: "Water Cat",
      image: "/coming-soon/water cat.png",
      description: "Esprit des eaux",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <Link href="/#showcase">
          <button className={styles.backButton}>Retour</button>
        </Link>

        <div className={styles.header}>
          <h1 className={styles.title}>Prochains Personnages</h1>
          <p className={styles.subtitle}>Découvrez les futurs héros qui rejoindront bientôt l'arène</p>
        </div>

        <div className={styles.charactersGrid}>
          {upcomingCharacters.map((character) => (
            <div key={character.id} className={styles.characterCard}>
              <div className={styles.imageContainer} onClick={() => handleImageClick(character)}>
                <Image
                  src={character.image}
                  alt={character.name}
                  width={300}
                  height={300}
                  className={styles.characterImage}
                />
                <div className={styles.overlay}>
                  <div className={styles.comingSoonBadge}>
                    <span>Bientôt</span>
                  </div>
                </div>
              </div>
              <div className={styles.characterInfo}>
                <h3 className={styles.characterName}>{character.name}</h3>
                <p className={styles.characterDescription}>{character.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.rosterSection}>
          <h2 className={styles.rosterTitle}>Roster Complet</h2>
          <div className={styles.rosterImageContainer}>
            <Image
              src="/coming-soon/grid roster1.PNG"
              alt="Roster complet des personnages"
              width={800}
              height={533}
              className={styles.rosterImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
