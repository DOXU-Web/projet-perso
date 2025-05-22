import styles from "./YoutubeEmbed.module.css";

const YoutubeEmbed = ({ videoId }) => (
  <div className={styles.videoContainer}>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default YoutubeEmbed;
