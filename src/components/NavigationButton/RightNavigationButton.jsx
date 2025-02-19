import React from 'react';
import rightArrow from '../../assets/right-arrow.svg'; 
import styles from './NavigationButton.module.css';

const RightNavigationButton = () => {
  return (
    <div className={styles.navigationButton}>
      <img src={rightArrow} alt="Right Arrow" />
    </div>
  );
};

export default RightNavigationButton;
