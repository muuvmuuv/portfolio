/**
 * Gatsby's Config APIs
 *
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config()

const siteMetadata = require("./metadata")
const { isDevelopment } = require("./utils/environment")

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-pnpm",
    "gatsby-plugin-react-helmet-async",
    "gatsby-plugin-preact",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: siteMetadata.siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-simple-analytics",
      options: {
        domain: "sa.marvin.digital",
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: ["src/styles", "src/styles/mixins"],
        },
        postCssPlugins: [
          require("autoprefixer"),
          require("cssnano")({
            preset: [
              "default",
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
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        stripMetadata: false,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
          options: {
            props: {
              preserveAspectRatio: "xMidYMid meet",
              width: "100%",
              height: "100%",
            },
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/default-page.jsx"),
        },
        extensions: [".mdx", ".md"],
        remarkPlugins: [require("remark-unwrap-images")],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              className: "anchor-link",
              icon: "🖇️",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              backgroundColor: "transparent",
              linkImagesToOriginal: true,
              maxWidth: 1200,
              quality: 80,
              withWebp: true,
              withAvif: true,
              disableBgImage: true,
              showCaptions: true,
            },
          },
          "gatsby-remark-a11y-emoji",
          // "gatsby-remark-embedder",
          // "gatsby-remark-check-links",
          // "gatsby-remark-copy-linked-files",
          // {
          //   resolve: require.resolve("./plugins/gatsby-remark-normalize-url"),
          // },
        ],
      },
    },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        fragmentsPath: "fragments",
        stages: isDevelopment ? ["DRAFT", "PUBLISHED"] : ["PUBLISHED"],
        downloadLocalImages: true,
        locales: ["en"],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "src/images",
      },
    },

    //   {
    //     resolve: "gatsby-source-files",
    //     options: {
    //       name: "leasot",
    //       files: ["${__dirname}/gatsby", "${__dirname}/src"],
    //       extensions: ['js', 'jsx', 'md', 'mdx', 'scss'],
    //     },
    //   },
    //   {
    //     resolve: "gatsby-transformer-leasot",
    //     options: {
    //       sourceInstanceName: "leasot",
    //       internalType: 'SingleFile',
    //       customTags: ["BUG"], // additionally to: TODO, FIXME
    //       mode: 'mdx',
    //     },
    //   },
    //   "gatsby-plugin-remove-trailing-slashes",
    //   'gatsby-plugin-catch-links',
    //   'gatsby-plugin-sitemap',
    //   {
    //     resolve: "gatsby-plugin-breadcrumb",
    //     options: {
    //       useAutoGen: true,
    //       exclude: ["/404"],
    //     },
    //   },
    //   {
    //     resolve: "gatsby-plugin-humans-txt",
    //     options: {
    //       team: [
    //         {
    //           Developer: 'Marvin Heilemann',
    //           GitHub: 'muuvmuuv',
    //           Twitter: '@muuvmuuv',
    //         },
    //       ],
    //       thanks: ["Gatsby", 'RSMS', 'Now by Zeit', 'Deepl'],
    //       site: {
    //         Standards: 'HTML5, SCSS, ESNEXT, GraphQL',
    //         Components: 'https://github.com/muuvmuuv/portfolio/blob/master/package.json',
    //         Softwares: 'VS Code, SublimeText, Microsoft Edge, Sketch, iTerm',
    //       },
    //       note: "Built in beautiful Frankfurt am Main 🏙\nMore on https://marvin.digital/credits",
    //     },
    //   },
    //   {
    //     resolve: 'gatsby-plugin-robots-txt',
    //     options: {
    //       policy: [
    //         {
    //           userAgent: '*',
    //           allow: '/',
    //         },
    //         {
    //           userAgent: '*',
    //           disallow: ['/me.gif'],
    //         },
    //       ],
    //     },
    //   },
    //   {
    //     resolve: 'gatsby-plugin-manifest',
    //     options: {
    //       name: siteMetadata.siteTitle,
    //       short_name: siteMetadata.siteTitleShort,
    //       start_url: '/?source=pwa',
    //       background_color: '#1f242e', // must equal "--background-color" in "./src/styles/themes/_<theme>.scss"
    //       theme_color: '#fafcff', // how the UI should be tinted (on Android the top bar)
    //       display: 'standalone',
    //       icon: './static/favicon.svg',
    //     },
    //   },
    //   {
    //     resolve: 'gatsby-plugin-remove-generator',
    //     options: {
    //       removeVersionOnly: true,
    //     },
    //   },
    //   {
    //     resolve: "gatsby-plugin-offline",
    //     options: {
    //       appendScript: require.resolve("./src/sw.js"),
    //       precachePages: [
    //         "/about/",
    //         "/imprint/",
    //         "/credits/",
    //         "/changelog/",
    //         '/projects/',
    //         '/projects/*',
    //         '/photography/',
    //         '/photography/*',
    //         '/writings/',
    //         '/writings/*',
    //       ],
    //     },
    //   },
    //   {
    //     resolve: 'gatsby-plugin-bundle-stats',
    //     options: {
    //       // https://github.com/relative-ci/bundle-stats/tree/master/packages/webpack-plugin
    //       compare: true,
    //       outDir: path.relative(buildPath, reportsPath),
    //       stats: {
    //         context: './src',
    //       },
    //     },
    //   },
  ],
}
