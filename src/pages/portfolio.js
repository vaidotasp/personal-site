import React from "react";
import SEO from "../components/seo";
import styles from "./portfolio.module.css";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import gh from "../images/github.svg";
import monitor from "../images/monitor.svg";

const projects = [
  {
    title: "Asana Dashboard Tool",
    description:
      "A dashboard that uses React to track existing projects and generate reports in Asana project management tool.",
    image: "imgAsana",
    demoURL: "https://asana-dashboard.herokuapp.com/",
    ghURL: "https://www.github.com/vaidotasp/asana-client",
    tech: ["javascript", "react", "node"]
  },
  {
    title: "Odliva Product Page",
    description: "Project built for freelance client showcasing products and providing a contact form.",
    image: "imgOdliva",
    demoURL: "http://naminiaigyvunai.odliva.lt/",
    ghURL: "https://www.github.com/vaidotasp/odliva-pets",
    tech: ["javascript", "react", "gatsby"]
  },
  {
    title: "PairUp",
    description: "A web application that helps to find like minded people who want to do certain activities together.",
    image: "imgPairup",
    demoURL: "https://pair-up.net/",
    ghURL: "https://github.com/chingu-voyage7/Bears-Team-09",
    tech: ["javascript", "react", "node", "postgresql"]
  }
];

function PortfolioPage(props) {
  const projectsList = projects.map((project, index) => {
    return <Project data={props.data} {...project} key={index} />;
  });

  return (
    <Layout>
      <SEO title="portfolio" keywords={["portfolio", "react", "seo"]} />
      <div style={{ maxWidth: 960 }}>
        <h2 className={styles.title}>Portfolio</h2>
        <p className={styles.subtitle}>Here are examples of what I've done</p>
        <div className={styles.projectsContainer}>{projectsList}</div>
      </div>
    </Layout>
  );
}

function Project(props) {
  function getImgPath(imageObject, imagePath) {
    const images = Object.keys(imageObject);
    const currentImg = images.filter(img => img === imagePath);
    return imageObject[currentImg];
  }

  const { title, description, image, tech, demoURL, ghURL } = props;
  const techList = tech.join(", ");
  const imgPath = getImgPath(props.data, image);

  return (
    <div className={styles.projectCard}>
      <a target="_blank" rel="noopener noreferrer" href={demoURL}>
        <Img className={styles.img} fluid={imgPath.childImageSharp.fluid} />
      </a>
      <div className={styles.info}>
        <div className={styles.projectTitle}>{title}</div>
        <div>{description}</div>
        <div>
          <p className={styles.techList}>Tech: </p>
          <span style={{ borderBottom: "3px solid gold" }}>{techList}</span>
        </div>
        <div className={styles.links}>
          <a target="_blank" rel="noopener noreferrer" href={demoURL}>
            <img className={styles.logo} img src={monitor} alt="monitor-logo" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={ghURL}>
            <img className={styles.logo} img src={gh} alt="github-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;

export const pageQuery = graphql`
  query {
    imgPairup: file(relativePath: { eq: "pairup.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imgAsana: file(relativePath: { eq: "asana.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imgOdliva: file(relativePath: { eq: "odliva.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
