import React from "react";
import styles from "./now.module.css";

const date = "Feb 15, 2021";

function NowContent() {
  return (
    <div className={styles.now}>
      <h4>Now</h4>
      <p>
        Inspired by Derek Sivers{" "}
        <a
          className={styles.link}
          target="_blank"
          href="https://nownownow.com/about"
          rel="noopener noreferrer"
        >
          nownownow&nbsp;
        </a>
        page, here is what I am doing right now as of {date}:
      </p>
      <ul style={{ margin: 0 }}>
        <li className={styles.listItem} >
          <span>Experimenting with Go language by building a weather forecast CLI tool.</span>
        </li>
        <li className={styles.listItem} >
          <span>Diving deep in React Testing Library and other testing approaches for React applications.</span>
        </li>
        <li className={styles.listItem} >
          <span>
            Writing a blog post about legacy code why it is awesome to work on.
          </span>
        </li>
      </ul>
    </div>
  );
}

export default NowContent;
