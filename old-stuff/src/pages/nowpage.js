import React from "react";
import Layout from "../components/layout";
import NowContent from "../components/NowContent";

function NowPage() {
  return (
    <Layout>
      <div style={{ marginTop: 60, height: "70vh" }}>
        <h2>Now Page</h2>
        <NowContent />
      </div>
    </Layout>
  );
}

export default NowPage;
