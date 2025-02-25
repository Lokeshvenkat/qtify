import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import useAutocomplete from '@mui/base/useAutocomplete';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ searchData, placeholder = "Search an album of your choice" }) => {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
  } = useAutocomplete({
    id: 'search-bar',
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <div {...getRootProps()} className={styles.searchInputContainer}>
          <input
            type="text"
            placeholder={placeholder}
            className={styles.searchInput}
            {...getInputProps()}
          />
          <SearchIcon className={styles.searchIcon} />
        </div>
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      {groupedOptions.length > 0 && (
        <ul {...getListboxProps()} className={styles.listbox}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })} key={option.title} className={styles.listItem}>
              <span>{option.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
