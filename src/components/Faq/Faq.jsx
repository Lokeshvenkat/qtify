import React from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  return (
    <section className={styles.faq}>
      <h2>FAQs</h2>
      <div className={styles.faqItem}>
        <h3>Is QTify free to use?</h3>
        <p>Yes, QTify is free to use.</p>
      </div>
      <div className={styles.faqItem}>
        <h3>Can I download and listen to songs offline?</h3>
        <p>Sorry, unfortunately we don't provide the service to download any songs.</p>
      </div>
    </section>
  );
};

export default FAQ;
