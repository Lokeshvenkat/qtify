import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../Assets/search-icon.svg";

// Search input component with icon button
function Search({ placeholder }) {
  // Prevent form submission from triggering page reload
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.wrapper} onSubmit={handleFormSubmit}>
      {/* Input field with placeholder text */}
      <input
        type="text"
        className={styles.Search}
        placeholder={placeholder}
        required
      />
      
      {/* Submit button with SVG icon */}
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
