import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Test = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={data => (
        <div>
          <p>{data.site.siteMetadata.title}</p>
          <p>{data.site.siteMetadata.description}</p>
        </div>
      )}
    />
  );
};

export default Test;
