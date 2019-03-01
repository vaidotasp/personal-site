import React from "react";
import { StaticQuery, graphql } from "gatsby";

const AboutContent = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
            edges {
              node {
                html
              }
            }
          }
        }
      `}
      render={data => {
        const { allMarkdownRemark } = data;
        const { html } = allMarkdownRemark.edges[0].node;
        return (
          <div>
            <div className="about-page" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        );
      }}
    />
  );
};

export default AboutContent;
