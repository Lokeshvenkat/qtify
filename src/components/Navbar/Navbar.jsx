import React from 'react';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import FeedbackButton from '../FeedbackButton/FeedbackButton';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar />
      <FeedbackButton text="Give Feedback" />
    </nav>
  );
};

export default Navbar;
