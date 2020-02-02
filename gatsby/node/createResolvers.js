const GraphQLJSON = require('graphql-type-json')

module.exports = async ({ createResolvers }) => {
  const resolvers = {
    Query: {
      singleFile: {
        type: [`SingleFile`],
        resolve: GraphQLJSON,
      },
    },
  }

  createResolvers(resolvers)
}
