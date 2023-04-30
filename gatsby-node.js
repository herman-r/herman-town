const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = node.frontmatter.slug || createFilePath({ node, getNode })

    createNodeField({
      node,
      name: "id",
      value: node.id,
    })

    createNodeField({
      node,
      name: "slug",
      value: `/journal${slug}`,
    })

    createNodeField({
      node,
      name: "frontmatter",
      value: node.frontmatter,
    })

    createNodeField({
      node,
      name: "type",
      value: "journal",
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { fields: { type: { eq: "journal" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/journal.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
