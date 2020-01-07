/**
 * Gatsby's Config APIs
 *
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path')
const { yellow } = require('kleur')
const { getPkgVersion, siteMetadata } = require('./gatsby/utils')
const { activeEnv } = require('./gatsby/environment')

console.log(`Using environment: ${yellow(activeEnv)}\n`)

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@app': './',
          '@components': './components',
          '@layouts': './layouts',
          '@scripts': './scripts',
          '@utils': './utils',
          '@hooks': './hooks',
          '@images': './images',
        },
      },
    },
    // `gatsby-plugin-layout`,
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/layouts/Index.jsx`),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: process.env.SITE_URL,
        stripQueryString: true,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    'gatsby-plugin-purgecss',
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
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
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
            },
          },
          `remark-checkbox-spanner`,
          {
            resolve: `remark-custom-classes`,
            options: {
              root: {
                image: 'container',
                heading: 'container container--small',
                blockquote: 'container container--small',
                thematicBreak: 'container container--small',
                list: 'container container--small',
                table: 'container container--small',
                footnoteDefinition: 'container container--small',
                paragraph: 'container container--small',
              },
              remark: {
                images: 'container',
                prismjs: 'container container--small',
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
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
      resolve: 'gatsby-plugin-remove-generator',
      options: {
        removeVersionOnly: true,
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
      },
    },
  ],
}
