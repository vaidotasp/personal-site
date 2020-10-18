import React from "react";
import styles from "./now.module.css";

const date = "Oct 18, 2020";

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
        <li>
          <span>•Autumn in Washington DC, likely the best season.</span>
        </li>
        <li>
          <span>•Going through TSCONF 2020 videos, a few good gems - recommend checking out the keynote at minimum.</span>
        </li>
        <li>
          <span>•Looking to write my next blog post, undecided yet, but probably talking about refactoring and how to "sell" it.</span>
        </li>
      </ul>
    </div>
  );
}

export default NowContent;
