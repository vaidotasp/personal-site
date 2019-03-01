import React from "react";
import SEO from "../components/seo";
import styles from "./about.module.css";
import Layout from "../components/layout";
import AboutContent from "../components/AboutContent";
import resumeDoc from "../content/Vaidotas Piekus Resume.pdf";

function AboutPage() {
  return (
    <Layout>
      <SEO title="now" keywords={["now", "react", "seo"]} />
      <div style={{ marginTop: 100 }}>
        <div className={styles.topSection}>
          <h2>About Page</h2>
          <div style={{ textAlign: "right" }}>
            <a href={resumeDoc} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
              Resume in PDF
            </a>
          </div>
        </div>
        <AboutContent />
      </div>
    </Layout>
  );
}

export default AboutPage;
