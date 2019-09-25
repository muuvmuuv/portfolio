const { yellow } = require('kleur')
const { activeEnv } = require('./gatsby/utils')
const metadata = require('./metadata')
const { parsed } = require('dotenv').config()

console.log(`Using environment: ${yellow(activeEnv)}\n`)

const siteMetadata = {
  ...metadata,
  ...{
    siteUrl: parsed.SITE_URL,
  },
}

module.exports = {
  siteMetadata,
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
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `writings`,
        path: `${__dirname}/content/writings`,
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
