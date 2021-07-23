module.exports = {
  siteMetadata: {
    title: `Vaidotas Piekus Personal Site`,
    description: `Vaidotas Piekus is a web developer. This site is a personal space containing information and thoughts that can attributed to the owner of the site and neither another entitty or person but the author.`,
    author: `@vaidotaspi`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
