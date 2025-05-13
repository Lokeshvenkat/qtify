import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

// Reusable Card component to render either album or song data
function Card({ data, type }) {
  // Function to render the appropriate card layout based on type
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, title, follows, slug, songs } = data;

        return (
          // Tooltip shows total number of songs on hover
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            {/* Navigates to album details on click */}
            <Link to={`/album/${slug}`}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  {/* Album image */}
                  <img src={image} alt="album art" loading="lazy" />
                  
                  {/* Follows banner using Chip component */}
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={styles.chip}
                    />
                  </div>
                </div>
                {/* Album title */}
                <div className={styles.titleWrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
      }

      case "song": {
        const { likes, image, title } = data;

        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              {/* Song thumbnail */}
              <img src={image} alt="song cover" loading="lazy" />
              
              {/* Likes displayed in a styled pill */}
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            {/* Song title */}
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }

      // Return empty element for unknown type
      default:
        return <></>;
    }
  };

  return getCard(type);
}

export default Card;
