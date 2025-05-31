import styles from "./YoutubeEmbed.module.css";

const YoutubeEmbed = ({ videoId }) => (
  <div className={styles.videoContainer}>
    <iframe
      width="600"
      height="400"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default YoutubeEmbed;
