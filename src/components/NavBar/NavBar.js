import { Button } from "./Button/Button";
import Logo from "./Logo/Logo";
import styles from "./NavBar.module.css";
import Search from "./Search/Search";
const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Logo />
      <Search placeholder="Search a album of your choice" />
      <Button children="GIVE FEEDBACK" />
    </nav>
  );
};

export default NavBar;
