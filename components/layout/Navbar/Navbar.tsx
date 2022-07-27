import styles from "./Navbar..module.scss";
import NavbarPlatforms from "./NavbarPlatforms/NavbarPlatforms";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <span className={styles["app-title"]}>next game</span>
      <NavbarPlatforms />
    </div>
  );
}
