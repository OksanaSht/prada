import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link to="/">
          <div className={styles.logo}>
            <img src="/images/logo.svg" alt="Globex Logo" />
          </div>
        </Link>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Men
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Women
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Kids
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Shop
              </a>
            </li>
            <li className={styles.item}>
              <Link to="/about" className={styles.link}>
                About
              </Link>
            </li>
          </ul>
        </nav>

        <form className={styles.search}>
          <input
            className={styles.textSearch}
            type="search"
            name="search"
            id="search"
            placeholder="Search here"
          />
          <button className={styles.startSearch}>
            <div className={styles.containerImg}>
              <img
                className={styles.imgSearch}
                src="/images/search.svg"
                alt="Search Icon"
              />
            </div>
          </button>
        </form>
        <div className={styles.flexButtonsAvatar}>
          <button type="button" className={styles.button}>
            <img src="/images/heart.svg" alt="Heart" />
          </button>
          <button type="button" className={styles.button}>
            <img src="/images/shopping.svg" alt="Basket" />
          </button>

          <div className={styles.avatar}>
            <div className={styles.avatarImg}>
              <img src="/avatar/avatar.svg" alt="Avatar" />
            </div>
            <div className={styles.avatarText}>Anne Doe</div>
          </div>
        </div>
      </div>
    </header>
  );
};
