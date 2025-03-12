import React from 'react';
import './SearchBar.module.css';
import SearchSymbol from '@mui/icons-material/Search';
import AutoComplete from '@mui/material/Autocomplete';
import InputField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ data, placeholderText = "Search for an album" }) => {
  const navigate = useNavigate();

  const handleFormSubmit = (event, selectedValue) => {
    event.preventDefault();
    if (selectedValue) {
      navigate(`/album/${selectedValue.slug}`);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleFormSubmit} className="search-form">
        <AutoComplete
          options={data || []}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <InputField
              {...params}
              placeholder={placeholderText}
              className="search-input-field"
            />
          )}
          onChange={(event, selectedValue) => handleFormSubmit(event, selectedValue)}
          className="search-input-wrapper"
        />
        <button type="submit" className="search-submit-button">
          <SearchSymbol />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
