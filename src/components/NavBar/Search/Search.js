// import React from "react";
// import * as styles from "./Search.module.css";
// import SearchIcon from "jsx:../../../assets/searchIcon.svg";

// const Search = ({ placeholder }) => {
//   return (
//     <div>
//       <form className={styles.wrapper}>
//         <input placeholder={placeholder} className={styles.search} />
//         <div>
//           <button className={styles.searchButton} type="submit">
//             <SearchIcon />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Search;

import React from "react";
import SearchIcon from "jsx:../../../assets/searchIcon.svg";
import styles from "./Search.module.css";

const Search = ({ search }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={search}></input>
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
