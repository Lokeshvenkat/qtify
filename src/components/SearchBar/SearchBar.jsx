import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ searchData, placeholder = "Search an album of your choice" }) => {
  const navigate = useNavigate();

  const handleSubmit = (event, value) => {
    event.preventDefault();
    if (value) {
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <Autocomplete
          options={searchData || []}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
              className={styles.searchInput}
            />
          )}
          onChange={(event, value) => handleSubmit(event, value)}
          className={styles.searchInputContainer}
        />
        <button type="submit" className={styles.searchButton}>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
