module.exports = {
  siteMetadata: {
    title: `Freedom Cleaning`,
    description: `Carpet Cleaning. Oven Cleaning. House Cleaning Services for Bradford and Leeds. Cleaning your home at your convenience.`,
    author: `Freedom Cleaning`,
    siteUrl: `https://freedom-cleaning.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-open-graph-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `freedom cleaning website`,
        short_name: `freedom cleaning`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
