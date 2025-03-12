import React from 'react';
import LogoComponent from '../Logo/Logo';
import SearchComponent from '../SearchBar/SearchBar';
import FeedbackComponent from '../FeedbackButton/FeedbackButton';
import './Navbar.module.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <LogoComponent />
      <SearchComponent customClass="search-bar" />
      <FeedbackComponent label="Give Feedback" />
    </header>
  );
};

export default Navbar;
