require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `SaitoLab`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICRO_CMS_API_KEY,
        serviceId: process.env.MICRO_CMS_SERVICE_ID,
        apis: [
          {
            endpoint: 'sample-posts',
          },
          {
            endpoint: 'works',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};