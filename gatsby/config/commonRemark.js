// https://www.gatsbyjs.org/docs/mdx/plugins/

module.exports = [
  {
    resolve: 'gatsby-remark-images',
    options: {
      maxWidth: 1600,
      backgroundColor: 'transparent',
      linkImagesToOriginal: true,
      quality: 75,
      withWebp: true,
      showCaptions: true,
    },
  },
  {
    resolve: 'gatsby-remark-emoji',
    options: {
      emojiConversion: 'shortnameToUnicode',
    },
  },
  {
    resolve: `gatsby-remark-prismjs`,
    options: {
      noInlineHighlight: true,
      prompt: {
        user: 'root',
        host: 'localhost',
        global: false,
      },
      // BUG: https://github.com/gatsbyjs/gatsby/issues/17997
      // BUG: https://github.com/gatsbyjs/gatsby/issues/20642
      // plugins: [
      //   require.resolve(
      //     'prismjs/plugins/show-invisibles/prism-show-invisibles'
      //   ),
      // ],
    },
  },
]
