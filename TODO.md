- [x] update NPM
- [x] see if new start template has some recommendations
- [x] read docs a little
- [x] repair console errors
- [x] remove deprecated stuff
- [x] check why `-` is a regular file and not `f`
- [x] add eslint
- [x] use Gatsby Link component
- [x] put null/false/true into own component
- [x] this fonts must be loaded in order
  - Sync: Abril Fatface
  - Sync: IBM Plex Mono
  - Async: Inter
- [x] replace package.json with version.txt to reduce size
- [x] add custom slug to all pages
- [x] test `postcss-easing-gradients` with Scss loaded in `/src`
- [x] ~~add schema generator~~
- [x] new start page: https://labs.semplice.com/s5-vertical-grid
- [x] test purgecss with classes from Markdown files
- [x] add NOW deployment
  - [x] Setup Nameserver
    - [x] Test
  - [x] Everything pushed to master -> marvin.digital
  - [x] Everything pushed to development -> dev.marvin.digital
- [ ] Setup GitHub workflow to deploy with notification and version alias
- [x] replace React with [Preact][1] (check if it works when finished)
- [x] add version to GraphQL data not as file...
- [x] remove "build brotli from source" with a already finished build
- [x] always use latest NGINX image
- [x] test prod build locally with SSL and brotli compression
- [x] weird lighter background underneath the footer (backdrop-filter issue)
- [x] setup siteUrl as env var to pass to build process so lighthouse will get
      the correct canonical url
- [x] remove bundle analyzer from prod builds in NOW
- [x] setup scss linter
- [x] setup smacss to apply css sort order
- [x] fix issue with node env version in prod build
- [ ] use gatsby images everywhere (homepage for file savings)
- [ ] fix issue with header on prod build
- [ ] MDX pages are not using remark images plugin
- [ ] add scroll to top
- [ ] check description, keywords and title on all pages
- [ ] add md table of contents
- [ ] new image for start: me while coding
- [ ] new image for start: me while writing
- [x] put scss theme stuff in own mixin for compat.
- [x] Add footer with: version, social-media, imprint, changelog, copyright
      notice
- [x] test react helmet async
- [x] add "increase version" by script
- [x] add bundle analyzer
- [x] analyze via bundlephobia
- [x] add github bots to auto update dependencies
- [x] add lighthouse from M8FINDER project
- [x] update lighthouse audit
  - [x] save HTML
  - [x] save JSON
  - [x] save Screenshot for mobile and desktop
  - [x] open only desktop
  - [x] script to open mobile
  - [ ] open summary view by default
- [x] Make text justified
- [x] ~~use CSS blend modes (overlay)~~
- [ ] add League of Legends API to show profile and stats
  - https://developer.riotgames.com/apis
- [x] add classes to tags https://github.com/gatsbyjs/gatsby/issues/17824
- [ ] use Inter variable Font: https://rsms.me/inter/var-test.html
- [ ] set font feature settings (numbers, dates, etc.):
  - https://rsms.me/inter/#features
- [ ] Upload all writings
  - [ ] Grammatical corrections
  - [ ] Find images on Unsplash
- [ ] Update current projects
  - [ ] More text
  - [ ] Update images
- [ ] Upload some photos (best off's)
- [ ] Setup SimpleAnalytics or something similar
- [x] check pages with Firefox Axe
- [ ] check all pages with screen reader
- [ ] check all pages with reduced motion
- [ ] check all pages with reduced transparency
- [ ] remove source maps in production builds
- [x] PWA: add service worker for offline usage (`gatsby-plugin-offline`)
- [x] ~~add tests?!~~
- [x] ~~move from bash script to [Nim][2]~~
- [ ] (auto) check markdown for ["Vary sentence length"][3]
- [ ] (auto) check markdown for [Readability][4]
- [ ] (auto) generate [rich snippets][5]
- [ ] use [Scheme customizations][6] to map post meta e.g. for authors
- [ ] use [Guess.js][7] <- this is just awesome, if it works with Gatsby
- [ ] use new iPad and Apple Pencil to make ["Marvin/Design"-Logo][8]
  - [ ] new color profile
  - [ ] use better [color system][10]
- [x] light theme
- [ ] ~~Eventually new Font: [ZOOM-PRO][9]~~ (too expensive)
- [ ] !!! use external CMS service for data instead of file based !!!
- [ ] open source the code 🤫 (requires above)

[1]: https://www.gatsbyjs.org/packages/gatsby-plugin-preact/
[2]: https://nim-lang.org/docs/tut1.html
[3]: https://github.com/wooorm/write-music
[4]: https://wooorm.com/readability/
[5]: https://www.gatsbyjs.org/docs/seo/
[6]: https://www.gatsbyjs.org/docs/schema-customization/#foreign-key-fields
[7]: https://github.com/guess-js/guess/issues/233#issuecomment-537542342
[8]:
  https://cdn.dribbble.com/uploads/2566/original/3b90b34984de0d727ac99e2fc28afda8.png?1569966332
[9]: https://thedesignersfoundry.com/zoom-pro
[10]: https://stripe.com/de/blog/accessible-color-systems
