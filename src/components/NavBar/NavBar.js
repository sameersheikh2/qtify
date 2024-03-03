import { Button } from "./Button/Button";
import Logo from "../../assets/logo.png";
import * as styles from "./NavBar.module.css";
import Search from "./Search/Search";
const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoDiv}>
        <img src={Logo} alt="logo" width={67} />
      </div>
      <Search placeholder="Search a album of your choice" />
      <Button children="GIVE FEEDBACK" />
    </nav>
  );
};

export default NavBar;
