// VideoPlayer.jsx
import React from 'react';
import styles from './VideoPlayer.module.css';

const VideoPlayer = ({ src }) => {
  return (
    <div className={styles.videoContainer}>
      <video
        src={src}
        className={styles.videoPlayer}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
