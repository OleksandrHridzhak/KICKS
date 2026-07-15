import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import clsx from "clsx";

import Logo from "@/shared/components/Logo/Logo";
import Icon from "@/shared/components/Icon/Icon";
import BurgerMenuBtn from "./components/BurgerMenuBtn";
import Wrapper from "@/shared/components/Wrapper/Wrapper";

function Header() {
  return (
    <Wrapper>
      <header className={styles.header}>
        <div className={styles.burgerMenuBtn}>
          <BurgerMenuBtn />
        </div>

        <nav className={clsx(styles.nav, styles.navLeft)}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/catalog" className="">
                New Items
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/catalog" className="">
                Men
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/catalog" className="">
                Women
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/" className={styles.logo}>
          <Logo size="standard" color="dark" />
        </Link>

        <nav className={clsx(styles.nav, styles.navRight)}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <button className={styles.searchBtn}>
                <Icon name="dandruff" size={"16-24"} className="" />
              </button>
            </li>
            <li className={styles.navItem}>
              <Link to="/profile" className="">
                <Icon name="user" size={"16-24"} className="" />
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/cart" className="">
                <span className={styles.cartNumber}>2</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </Wrapper>
  );
}

export default Header;
