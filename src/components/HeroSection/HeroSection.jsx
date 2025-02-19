import React from 'react';
import headphonesImage from '../../assets/hero.png';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.text}>
        100 Thousand Songs, ad-free
      </div>
      <div className={styles.image}>
        <img src={headphonesImage} alt="Headphones" />
      </div>
    </div>
  );
};

export default HeroSection;
