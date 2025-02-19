import React from 'react';
import leftArrow from '../../assets/left-arrow.svg';
import styles from './NavigationButton.module.css';

const LeftNavigationButton = () => {
  return (
    <div className={styles.navigationButton}>
      <img src={leftArrow} alt="Left Arrow" />
    </div>
  );
};

export default LeftNavigationButton;
