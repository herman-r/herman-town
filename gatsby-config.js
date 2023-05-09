'use strict';

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "herman town",
    description: "herman town",
    siteUrl: "https://herman.town",
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  description: edge.node.frontmatter.description || edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  author: edge.node.frontmatter.author || site.siteMetadata.author,
                };
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: { frontmatter: { contentType: { in: ["journal", "article"] } } }
                ) {
                  edges {
                    node {
                      excerpt
                      fields { slug }
                      frontmatter {
                        title
                        date
                        description
                        author
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "herman town",
          },
        ],
      },
    },
  ],
}

