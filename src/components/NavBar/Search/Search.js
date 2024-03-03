import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "jsx:../../../assets/searchIcon.svg";

const Search = ({ search }) => {
  return (
    <form className={styles.wrapper}>
      <input placeholder={search} className={styles.search} />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;

// import React from "react";
// import SearchIcon from "jsx:../../../assets/searchIcon.svg";
// import styles from "./Search.module.css";

// const Search = ({ search }) => {
//   return (
//     <form className={styles.wrapper}>
//       <input className={styles.search} placeholder={search}></input>
//       <button className={styles.searchButton} type="submit">
//         <SearchIcon />
//       </button>
//     </form>
//   );
// };

// export default Search;
