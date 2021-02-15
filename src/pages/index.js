import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ProfileImage from "../components/profile-img";
import SEO from "../components/seo";
import NowContent from "../components/NowContent";
import styles from "./main.module.css";

// import icons for skills section
import js from "../images/javascript.svg";
import ts from "../images/typescript.svg";
import node from "../images/nodejs.svg";
import ht from "../images/html.svg";
import css from "../images/css.svg";
import rc from "../images/react.svg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.bioCard}>
      <ProfileImage />
      <h1 className={styles.name}>Vaidotas Piekus</h1>
    </div>
    <div className={styles.infoPanel}>
      <div className={styles.about}>
        <h4>About Me</h4>
        <p>
          I am a full-stack developer based in Washington D.C. I build performant,
          high quality applications in React and TypeScript.
          Currently, I work at{" "}
          <a
            className={styles.link}
            href="https://www.blueraster.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blue Raster
          </a>
          {" "}where we build interactive geospatial applications for the web.
        </p>
        <p>
          When I am not programming I enjoy obsessing over keyboards, photography
          and coffee.
        </p>
        <h4>Skills</h4>
        <ul className={styles.skillList}>
          <li className={styles.skill}>
            <img className={styles.icon} src={js} alt="javascript-icon" />
            <p className={styles.skillLabel}>JavaScript</p>
          </li>
          <li className={styles.skill}>
            <img className={styles.icon} src={ts} alt="typescript-icon" />
            <p className={styles.skillLabel}>TypeScript</p>
          </li>
          <li className={styles.skill}>
            <img className={styles.icon} src={rc} alt="react-icon" />
            <p className={styles.skillLabel}>React</p>
          </li>
          <li className={styles.skill}>
            <img className={styles.icon} src={node} alt="node-icon" />
            <p className={styles.skillLabel}>Nodejs</p>
          </li>
          <li className={styles.skill}>
            <img className={styles.icon} src={ht} alt="html-icon" />
            <p className={styles.skillLabel}>HTML</p>
          </li>
          <li className={styles.skill}>
            <img className={styles.icon} src={css} alt="css-icon" />
            <p className={styles.skillLabel}>CSS</p>
          </li>
        </ul>
      </div>
      <NowContent />
    </div>
  </Layout>
);

export default IndexPage;
