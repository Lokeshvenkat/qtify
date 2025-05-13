import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

// Navigation bar component
function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      {/* Logo redirects to home page */}
      <Link to="/">
        <Logo />
      </Link>

      {/* Search bar with dynamic placeholder */}
      <Search placeholder="Search a song" searchdata={searchData} />

      {/* Feedback button links to feedback page */}
      <Link to="/Feedback">
        <Button>Give Feedback</Button>
      </Link>
    </nav>
  );
}

export default Navbar;
