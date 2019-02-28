import React from "react";
import SEO from "../components/seo";
import styles from "./about.module.css";
import Layout from "../components/layout";
import Abba from "../components/abba";
import ppp from "../content/Vaidotas Piekus Resume.pdf";
function AboutPage() {
  console.log(ppp);

  return (
    <Layout>
      <SEO title="now" keywords={["now", "react", "seo"]} />
      <div style={{ marginTop: 60, height: "70vh" }}>
        <h2>About Page</h2>
        <div>Description Goes Here</div>
        <div>
          <p>Download my resume here:</p>
          <a href={ppp} target="_blank" className={styles.downloadBtn}>
            Resume in PDF
          </a>
          <Abba />
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;

/*
Query:

{
  allMarkdownRemark(
    filter: { fileAbsolutePath: {regex: "\/pages/"}}
  ) {
    edges {
      node {
        html
      }
    }
  }
}

*/
