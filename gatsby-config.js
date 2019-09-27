/**
 * Gatsby's Config APIs
 *
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')
const { yellow } = require('kleur')
const { getPkgVersion, getSiteMetadata } = require('./gatsby/utils')
const { activeEnv, isDev } = require('./gatsby/environment')

console.log(`Using environment: ${yellow(activeEnv)}\n`)

module.exports = {
  siteMetadata: getSiteMetadata(),
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
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // ignore: ['src/styles'],
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
        excerpt_separator: `<!-- EXCERPT -->`,
        tableOfContents: {
          maxDepth: 3,
        },
        commonmark: false,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          // 'remark-p',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
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
    {
      resolve: `gatsby-plugin-humans-txt`,
      options: {
        team: [
          {
            Developer: `Marvin Heilemann`,
            GitHub: `muuvmuuv`,
            Twitter: `@muuvmuuv`,
          },
        ],
        thanks: [`Gatsby`, `Node`],
        site: {
          Standards: 'HTML5, SCSS, JSON, TXT, ES10',
          Components: 'Normalize.css, Tailwindcss',
          Softwares: 'VS Code, SublimeText, Brave',
        },
        note: `Made in the beautiful Frankfurt am Main 🏙`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [
          {
            userAgent: '*',
            allow: '/',
          },
          {
            userAgent: '*',
            disallow: ['/me.gif', '/version.txt'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerMode: 'static',
        reportFilename: path.resolve(
          __dirname,
          `reports/v${getPkgVersion()}/treemap.html`
        ),
        openAnalyzer: false,
        production: true,
        disabled: isDev,
      },
    },
  ],
}
