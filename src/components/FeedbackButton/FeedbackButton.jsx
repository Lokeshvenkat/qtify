import React from 'react';
import styles from './FeedbackButton.module.css';
import feedbackButton from '../../assets/feedback.png';

const FeedbackButton = ({ text }) => {
  return (
    <button className={styles.feedbackButton}>
      {text}
    </button>
  );
};

export default FeedbackButton;
