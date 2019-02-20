import React from "react";
import SEO from "../components/seo";
// import styles from "./portfolio.module.css";
import Layout from "../components/layout";
import Now from "../components/now";

function NowPage() {
  return (
    <Layout>
      <SEO title="now" keywords={["now", "react", "seo"]} />
      <div style={{ marginTop: 60, height: "70vh" }}>
        <h2>Now Page</h2>
        <Now />
      </div>
    </Layout>
  );
}

export default NowPage;
