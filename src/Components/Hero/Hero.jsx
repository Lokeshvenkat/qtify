import React from "react";
import styles from "./Hero.module.css";
import HeadPhone from "../../Assets/hero_headphones.png";

// Hero section with promotional message and image
function Hero() {
  return (
    <div className={styles.hero}>
      {/* Text section */}
      <div className={styles.text}>
        <h1>100 Thousand Songs, Ad-free</h1>
        <h1>Over Thousands of Podcast Episodes</h1>
      </div>

      {/* Image section */}
      <div>
        <img src={HeadPhone} width={112} alt="Headphones" />
      </div>
    </div>
  );
}

export default Hero;
