const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    let slug = node.frontmatter.slug || createFilePath({ node, getNode })

    if (node.frontmatter.contentType === "journal") {
      slug = `/journal${slug}`
    } else if (node.frontmatter.contentType === "article") {
      slug = `/articles${slug}`
    }

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })

    createNodeField({
      node,
      name: "frontmatter",
      value: node.frontmatter,
    })

    createNodeField({
      node,
      name: "type",
      value: node.frontmatter.contentType || "journal",
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
              type
            }
            frontmatter {
              date
              title
              emoji
            }
          }
        }
      }
    }
  `)

  const articles = result.data.allMarkdownRemark.edges.filter(
    ({ node }) => node.fields.type === "article"
  )

  createPage({
    path: "/articles",
    component: path.resolve(`./src/templates/articles.js`),
    context: {
      articles: articles,
    },
  })

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${node.fields.type}.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

