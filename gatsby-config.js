module.exports = {
  siteMetadata: {
    title: `Legal Firm`,
    description: `This is just basic app description`,
    author: `Marek Bareła`,
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
        name: `Legal firm`,
        short_name: `Legal`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`
  ]
}