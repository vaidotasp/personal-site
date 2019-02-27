import React from "react";
import { graphql } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="page-container">
      <div className="post">
        <h1>Title</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { date: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
