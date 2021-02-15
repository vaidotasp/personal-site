import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styles from "./layout.module.css";
import Header from "./header";
import gh from "../images/github.svg";
import tw from "../images/twitter.svg";
import ln from "../images/ln.svg";
import ma from "../images/mail.svg";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            paddingTop: 0
          }}
        >
          <main>{children}</main>
          <footer className={styles.footer}>
            <div className={styles.wrapper}>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/vaidotasp">
                <img className={styles.icon} src={gh} alt="github" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/vaidotaspi">
                <img className={styles.icon} src={tw} alt="twitter" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="mailto:vaidotasp@gmail.com">
                <img className={styles.icon} src={ma} alt="email" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vaidotas-piekus-19a24021/">
                <img className={styles.icon} src={ln} alt="linkedin" />
              </a>
            </div>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
