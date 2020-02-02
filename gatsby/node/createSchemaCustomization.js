const GraphQLJSON = require('graphql-type-json')

module.exports = async ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: 'json',
    extend: () => ({
      resolve: GraphQLJSON,
    }),
  })
}
