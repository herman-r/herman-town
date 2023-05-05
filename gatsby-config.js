'use strict';

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "herman town",
    description: "herman town",
    author: "herman"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `journals`,
        path: `${__dirname}/src/journals/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}

