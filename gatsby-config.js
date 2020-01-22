/**
 * Gatsby's Config APIs
 *
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */

/* eslint-disable import/first */
require('dotenv').config({
  path: `.env.build`,
})

const { yellow, blue, bold } = require('kleur')
const { getVersion, transformVersion } = require('./utils/version')
const { activeEnv, isAudit, isProd } = require('./utils/environment')
const commonRemark = require('./gatsby/config/commonRemark')
const siteMetadata = require('./metadata')

console.log(bold(siteMetadata.siteTitle))
console.log(`Version: ${blue(getVersion())}`)
console.log(`Environment: ${yellow(activeEnv)}`)
console.log(`Auditing: ${yellow(isAudit)}\n`)

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteMetadata.siteUrl,
        stripQueryString: true,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: isProd,
        stripMetadata: false,
        defaultQuality: 85,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
          options: {
            props: {
              preserveAspectRatio: 'xMidYMid meet',
              width: '100%',
              height: '100%',
            },
          },
        },
      },
    },
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
        name: `pages`,
        path: `${__dirname}/src/pages/`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/PageSingle.jsx'),
        },
        gatsbyRemarkPlugins: [...commonRemark],
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
          ...commonRemark,
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          `remark-checkbox-spanner`,
          {
            // TODO: try to replace this in the future with MDX custom components/shortcodes
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
          'gatsby-remark-check-links',
        ],
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        useClassNames: true,
        exclude: [`/404`],
        crumbLabelUpdates: [
          {
            pathname: '/projects',
            crumbLabel: 'Projects',
          },
          {
            pathname: '/photography',
            crumbLabel: 'Photography',
          },
          {
            pathname: '/writings',
            crumbLabel: 'Writings',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.siteTitle,
        short_name: siteMetadata.siteTitleShort,
        start_url: '/?source=pwa',
        background_color: '#1f242e', // must equal `--background-color` in `./src/styles/themes/_<theme>.scss`
        theme_color: '#fafcff', // how the UI should be tinted
        display: 'standalone',
        icon: './static/favicon.svg',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./src/sw.js`),
        precachePages: [
          `/about/`,
          `/imprint/`,
          `/credits/`,
          `/changelog/`,
          `/projects/*`,
          `/photography/*`,
          `/writings/*`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-humans-txt`,
      options: {
        team: [
          {
            Developer: 'Marvin Heilemann',
            GitHub: 'muuvmuuv',
            Twitter: '@muuvmuuv',
          },
        ],
        thanks: [`Gatsby`, `Node`],
        site: {
          Standards: 'HTML5, SCSS, JSON, TXT, ESNEXT, GraphQL, API, Rest',
          Components: 'Normalize.css, Preact, React',
          Softwares: 'VS Code, SublimeText, Brave, Firefox Developer Edition',
        },
        note: `Made in the beautiful city Frankfurt am Main 🏙`,
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
            disallow: ['/me.gif'],
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
    // BUG: https://github.com/angeloashmore/gatsby-plugin-react-axe/issues/6
    // isDev && 'gatsby-plugin-react-axe',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerMode: 'static',
        production: true,
        disable: !isAudit, // only run when doing production builds to perform audits
        openAnalyzer: false,
        reportFilename: `${__dirname}/reports/v${transformVersion(
          getVersion(),
          ['major', 'minor']
        )}.0/treemap.html`,
      },
    },
  ],
}
