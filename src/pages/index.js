import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ProfileImage from "../components/profile-img";
import SEO from "../components/seo";
import styles from "./main.module.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.bioCard}>
      <ProfileImage />
      <h1 className={styles.name}>Vaidotas Piekus</h1>
      <p>Web Developer</p>
    </div>
  </Layout>
);

export default IndexPage;
