import React from "react";
import styles from "./ContentBlock.module.css";

const ContentBlock = ({ backgroundImage, children }) => {
  return (
    <div className={styles.contentBlock} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}>{children}</div>
    </div>
  );
};

export default ContentBlock;
