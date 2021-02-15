import { Link } from "gatsby";
import React from "react";
import styles from "./header.module.css";

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className={styles.container}>
      <h1 className={styles.vp} style={{ margin: 0 }}>
        <Link to="/">VP</Link>
      </h1>
      <nav className={styles.navbar}>
        <li className={styles.list}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.list}>
          <a href="https://dev.to/vaidotas">Blog</a>
        </li>
      </nav>
    </div>
  </header>
);

export default Header;
