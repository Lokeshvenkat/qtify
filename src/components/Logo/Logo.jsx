import React from 'react';
import logoImage from '../../assets/logo.png';
import styles from './Logo.module.css';

const Logo = () => {
  return <img src={logoImage} alt="QTify Logo" className={styles.logo} />;
};

export default Logo;
