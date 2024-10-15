import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Input } from "@/shared/components";

export const Header = () => {
  const [productSearch, setProductSearch] = useState("");

  function search() {
    console.log("Search for:", productSearch);
  }

  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.container)}>
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

        <form className="">
          <Input
            value={productSearch}
            placeholder="Search here"
            onChange={setProductSearch}
            onEnter={search}
            name="search"
            right={
              <button type="submit" className={styles.button}>
                <img src="/images/search.svg" className={styles.imgSearch} />
              </button>
            }
          />
        </form>

        <div className={styles.flexButtonsAvatar}>
          <button type="button" className={styles.button}>
            <img src="/images/heart.svg" alt="Heart" />
          </button>
          <button type="button" className={styles.button}>
            <img src="/images/shopping.svg" alt="Basket" />
          </button>

          <Link to="/sign-up" className={styles.button}>
            Sign Up
          </Link>

          {/* <div className={styles.avatar}>
            <div className={styles.avatarImg}>
              <img src="/avatar/avatar.svg" alt="Avatar" />
            </div>
            <div className={styles.avatarText}>Anne Doe</div>
          </div> */}
        </div>
      </div>
    </header>
  );
};
