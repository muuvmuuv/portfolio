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
const siteMetadata = require('./metadata')

console.log(bold(siteMetadata.siteTitle))
console.log(`Version: ${blue(getVersion())}`)
console.log(`Environment: ${yellow(activeEnv)}`)
console.log(`Auditing: ${yellow(isAudit)}\n`)

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-pnpm`,
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
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('autoprefixer'),
          require('cssnano')({
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          }),
        ],
      },
    },
    `gatsby-transformer-json`,
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
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GCMS',
        fieldName: 'gcms',
        url: 'https://api-euwest.graphcms.com/v1/ck5xls94g1wlo01fl4vg1fvlt/master',
        headers: {
          Authorization: `Bearer ${process.env.GRAPH_CMS_PAT}`,
        },
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
      },
    },
    {
      resolve: `gatsby-source-files`,
      options: {
        name: `package`,
        files: [`${__dirname}/CHANGELOG.md`, `${__dirname}/TODO.md`],
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
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/templates/PageSingle.jsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-link`,
              icon: `<svg height="256" viewBox="0 0 512 256" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m384 0h-64c-6.333376 0-11.499968 2-15.500032 6-4 4-6 9.166656-6 15.500032 0 6.333312 2 11.499968 6 15.499968 4.000064 4 9.166656 6 15.500032 6h64c23.33344 0 43.416576 8.333248 60.249984 25s25.250048 36.66656 25.250048 60c0 23.666816-8.41664 43.83328-25.250048 60.499968-16.833408 16.666784-36.916544 25.000032-60.249984 25.000032h-64c-6.333376 0-11.499968 1.916646-15.500032 5.749997-4 3.833357-6 9.083302-6 15.750003 0 6.333363 2 11.416646 6 15.25 4.000064 3.833352 9.166656 5.75 15.500032 5.75h64c17.666752 0 34.166592-3.3333 49.500032-10 15.666688-6.666701 29.333248-15.833274 40.999936-27.5 11.666752-11.666726 20.833344-25.166592 27.500032-40.5 6.666688-15.666752 10-32.333248 10-50 0-17.33344-3.333312-33.83328-10-49.500032-6.666688-15.666688-15.83328-29.24992-27.500032-40.749952-11.666688-11.500096-25.333248-20.583296-40.999936-27.250048-15.33344-7-31.83328-10.499968-49.500032-10.499968zm-192 213.5h-64c-23.33344 0-43.416576-8.333248-60.249984-25.000032-16.8334336-16.666688-25.250016-36.833152-25.250016-60.499968 0-23.33344 8.4165824-43.333248 25.250016-60 16.833408-16.666752 36.916544-25 60.249984-25h64c6.333376 0 11.499968-2 15.500032-6 4-4 6-9.166656 6-15.499968 0-6.333376-2-11.500032-6-15.500032-4.000064-4-9.166656-6-15.500032-6h-64c-17.666752 0-34.166592 3.499968-49.500032 10.499968-15.6667136 6.666752-29.3332416 15.749952-40.999968 27.250048-11.6667264 11.500032-20.8332992 25.083264-27.5 40.749952-6.66670016 15.666752-10 32.166592-10 49.500032 0 17.666752 3.33329984 34.333248 10 50 6.6667008 15.333408 15.8332736 28.833274 27.5 40.5s25.3332544 20.833299 40.999968 27.5c15.33344 6.6667 31.83328 10 49.500032 10h64c6.333376 0 11.499968-1.916648 15.500032-5.75 4-3.833354 6-8.916637 6-15.25 0-6.666701-2-11.916646-6-15.750003-4.000064-3.833351-9.166656-5.749997-15.500032-5.749997zm-42.499968-85.5c0 6.666688 1.916608 11.916672 5.749952 15.750016s8.916672 5.750016 15.249984 5.750016h171.000064c6.333312 0 11.41664-1.916672 15.249984-5.750016s5.749952-9.083328 5.749952-15.750016c0-6.333376-1.916608-11.41664-5.749952-15.249984s-8.916672-5.750016-15.249984-5.750016h-171.000064c-6.333312 0-11.41664 1.916672-15.249984 5.750016s-5.749952 8.916608-5.749952 15.249984z" fill-rule="evenodd"/></svg>`,
            },
          },
          'gatsby-remark-check-links',
          {
            // BUG: https://github.com/gatsbyjs/gatsby/issues/16239
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              backgroundColor: 'transparent',
              linkImagesToOriginal: true,
              quality: 75,
              withWebp: true,
              disableBgImage: true,
              showCaptions: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-remark-emoji',
            options: {
              emojiConversion: 'shortnameToUnicode',
            },
          },
        ],
        // BUG: https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: [`gatsby-remark-images`],
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.siteTitle,
        short_name: siteMetadata.siteTitleShort,
        start_url: '/?source=pwa',
        background_color: '#1f242e', // must equal `--background-color` in `./src/styles/themes/_<theme>.scss`
        theme_color: '#fafcff', // how the UI should be tinted (on Android the top bar)
        display: 'standalone',
        icon: './static/favicon.svg',
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
        reportFilename: `${__dirname}/reports/v${transformVersion(getVersion(), [
          'major',
          'minor',
        ])}.0/treemap.html`,
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
          '/projects/',
          '/projects/*',
          '/photography/',
          '/photography/*',
          '/writings/',
          '/writings/*',
        ],
      },
    },
  ],
}
