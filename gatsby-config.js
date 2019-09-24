const { yellow } = require('kleur')

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
const isDev = activeEnv === 'development'

console.log(`Using environment config: ${yellow(activeEnv)}\n`)

module.exports = {
  siteMetadata: {
    title: `Marvin/Digital`,
    author: `muuvmuuv`,
    description: `Projects Marvin Heilemann has been working on now and in the past.`,
  },
  plugins: [
    'gatsby-plugin-layout',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: process.env.GATSBY_SITE_URL,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        ignore: ['src/styles'],
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
        name: `portfolio`,
        path: `${__dirname}/content/portfolio`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        commonmark: false,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          // 'remark-p',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200, // TODO: smaller max width, please
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
        ],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'M/D',
        short_name: 'M/D',
        start_url: '/',
        background_color: '#1f242e',
        theme_color: '#00e2a1',
        display: 'browser',
        icon: './static/favicon.svg',
      },
    },
  ],
}
