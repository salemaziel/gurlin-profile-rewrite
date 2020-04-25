module.exports = {
  siteMetadata: {
    title: `RachelGurlin`,
    description: `Rachel Gurlin Website Profile`,
    author: `SalemAziel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rachel Gurlin Profile`,
        short_name: `RachelGurlin`,
        start_url: `/`,
        background_color: `#F26C58`,
        theme_color: `#F26C58`,
        display: `minimal-ui`,
        icon: `src/images/rainbow.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
