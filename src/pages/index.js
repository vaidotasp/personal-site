import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ProfileImage from "../components/profile-img";
import SEO from "../components/seo";
import NowContent from "../components/NowContent";
import styles from "./main.module.css";

// import icons for skills section
import js from "../images/javascript.svg";
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
      <p>Web Developer</p>
    </div>
    <div className={styles.infoPanel}>
      <div className={styles.about}>
        <h4>About Me</h4>
        <p>
          I’m a web developer in Washington D.C. with expertise in all things web -- ranging from front-end to back-end
          and anything in between. I have experience in designing and building modern websites for clients and working
          on full stack applications. Take a look at my work
          <Link to="/portfolio">
            {" "}
            <span className={styles.link}>here</span>
          </Link>
          .
        </p>
        <h4>Skills</h4>
        <ul className={styles.skillList}>
          <li className={styles.skill}>
            <img className={styles.icon} src={ht} alt="html-icon" />
            <p>HTML</p>
          </li>
          <li className={styles.skill}>
            <img className={styles.icon} src={css} alt="css-icon" />
            <p>CSS</p>
          </li>
          <li className={styles.skill}>
            <img className={styles.icon} src={js} alt="javascript-icon" />
            <p>JavaScript</p>
          </li>
          <li className={styles.skill}>
            <img className={styles.icon} src={node} alt="node-icon" />
            <p>Nodejs</p>
          </li>
          <li className={styles.skill}>
            <img className={styles.icon} src={rc} alt="react-icon" />
            <p>React</p>
          </li>
        </ul>
      </div>
      <NowContent />
    </div>
  </Layout>
);

export default IndexPage;
