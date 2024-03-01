import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "jsx:../../../assets/searchIcon.svg";

const Search = ({ placeholder }) => {
  return (
    <div>
      <form className={styles.wrapper}>
        <input placeholder={placeholder} className={styles.search} />
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
