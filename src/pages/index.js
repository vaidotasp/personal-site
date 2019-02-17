import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ProfileImage from "../components/profile-img";
import SEO from "../components/seo";
import styles from "./main.module.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ProfileImage />
    <h1>Vaidotas Piekus</h1>
    <p>Web Developer</p>
  </Layout>
);

export default IndexPage;
