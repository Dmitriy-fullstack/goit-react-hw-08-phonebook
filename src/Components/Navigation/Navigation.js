import { NavLink } from "react-router-dom";
import styles from "../authNav/authNav.module.css";

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Главная
    </NavLink>
  </nav>
);

export default Navigation;
