import React from "react";
import styles from "./now.module.css";

const date = "Feb 18, 2019";

function NowContent() {
  return (
    <div className={styles.now}>
      <h4>Now</h4>
      <p>
        Inspired by Derek Sivers{" "}
        <a className={styles.link} target="_blank" href="https://nownownow.com/about" rel="noopener noreferrer">
          nownownow&nbsp;
        </a>
        page, here is what I am doing right now as of {date}:
      </p>
      <ul style={{ margin: 0 }}>
        <li>
          <span>
            • Waiting for spring to come in Washington DC, which is always short and nice prelude to the awful summers
          </span>
        </li>
        <li>
          <span>
            • Occasionally writing on{" "}
            <a className={styles.link} href="https://dev.to/vaidotas">
              Dev.to&nbsp;
            </a>
            about learning to code and other topics
          </span>
        </li>
        <li>
          <span>• Finishing reading Good Omens by Neil Gaiman and Terry Pratchett</span>
        </li>
        <li>
          <span>
            • Obsessing over wrist watches, namely{" "}
            <a className={styles.link} href="https://www.grand-seiko.com/us-en/collections/sbgh267g">
              Grand Seiko
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default NowContent;
