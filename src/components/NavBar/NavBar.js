import Button from "./Button/Button";
import Logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";
import Search from "./Search/Search";
const NavBar = () => {
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.logoDiv}>
          <img src={Logo} alt="logo" width={67} />
        </div>
        <Search search="Search a album of your choice" />
        <Button children="Give Feedback" />
      </nav>
    </>
  );
};

export default NavBar;

// import React from "react";
// import Button from "./Button/Button";
// import Search from "./Search/Search";
// import styles from "./NavBar.module.css";
// import LogoImage from "../../assets/logo.png";

// export default function Navbar() {
//   return (
//     <>
//       <nav className={styles.navbar}>
//         <div className={styles.logoDiv}>
//           <img src={LogoImage} alt="logo" width={67} />
//         </div>
//         <Search search={"Search a song of your choice"} />
//         <Button children="Give Feedback" />
//       </nav>
//     </>
//   );
// }
