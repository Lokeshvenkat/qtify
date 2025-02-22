import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="search an album of your choice"
        className={styles.searchInput}
      />
       <SearchIcon className={styles["search-icon"]} />
    </div>
  );
};

export default SearchBar;
