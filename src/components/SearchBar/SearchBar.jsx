import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="search a song"
        className={styles.searchInput}
      />
       <FaSearch className={styles["search-icon"]} />
    </div>
  );
};

export default SearchBar;
