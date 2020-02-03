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
  - ~~Sync: Abril Fatface~~
  - ~~Sync: IBM Plex Mono~~
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
- [x] ~~Setup GitHub workflow to deploy with notification and version alias~~
- [x] replace React with [Preact][1] (check if it works when finished)
- [x] add version to GraphQL data not as file...
- [x] remove "build brotli from source" with a already finished build
- [x] always use latest NGINX image
- [x] test prod build locally with SSL and brotli compression
- [x] weird lighter background underneath the footer (backdrop-filter issue)
- [x] setup siteUrl as env var to pass to build process so lighthouse will get the correct
      canonical url
- [x] remove bundle analyzer from prod builds in NOW
- [x] setup scss linter
- [x] setup smacss to apply css sort order
- [x] fix issue with node env version in prod build
- [x] use gatsby images everywhere (homepage for file savings)
- [x] weird background colors on imprint bottom section
- [x] fix issue with header on prod build
- [ ] MDX pages are not using remark images plugin
- [x] update mobile navigation
- [x] add scroll to top
- [x] check description, keywords and title on all pages
- [x] add md table of contents (~~for whatever reason, this is not working...~~ thanks
      MDX)
  - [ ] style it 😄
- [x] use [auto-changelog](https://github.com/CookPete/auto-changelog) for the changelog
      page
- [ ] image opening on big vertical images is broken, add max height and width + scrolling
      with mouse move
  - [ ] optimize image container to be bigger than the rest of the content (-margin?)
  - [ ] add buttons download and full screen view
- [ ] new image for start: me while coding
- [ ] new image for start: me while writing
- [x] skip this messy shit with elements wrapped in container tags
- [ ] create page transitions: https://github.com/react-spring/react-spring/issues/894
- [x] replace markdown remark with mdx
  - [x] add checkbox spanner to mdx
- [x] writings no image => small hero
- [x] put scss theme stuff in own mixin for compat.
- [x] Add footer with: version, social-media, imprint, changelog, copyright notice
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
  - [x] ~~open summary view by default~~
- [x] Make text justified
- [x] ~~use CSS blend modes (overlay)~~
- [ ] add League of Legends API to show profile and stats
  - https://developer.riotgames.com/apis
- [x] add classes to tags https://github.com/gatsbyjs/gatsby/issues/17824
- [ ] use Inter variable Font: https://rsms.me/inter/var-test.html
- [x] set font feature settings (numbers, dates, etc.):
  - https://rsms.me/inter/#features
- [x] Upload all writings
  - [x] Grammatical corrections
  - [x] ~~Find images on Unsplash~~
- [x] Update current projects
  - [x] More text
  - [x] Update images
- [ ] use `useScrollPosition` hook for user scrolling:
      https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
- [ ] update css transitions to use global custom props
- [ ] include reduced motion and transparency everywhere
- [ ] update theme colors with better naming for 4 different states
- [ ] Upload some photos (best off's)
- [ ] Setup SimpleAnalytics or something similar
  - [ ] Setup [Guess.js](https://github.com/guess-js/guess/) with `reportProvider`
    - https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-guess-js/src/gatsby-node.js
    - https://www.gatsbyjs.org/packages/gatsby-plugin-guess-js/?=guess
- [ ] show GitHub OSS with GitHub API on a separate page
- [ ] display `</Coding>` stuff somewhere or let it imported by browser XML export
- [ ] upload all content to GraphCMS (...hmm, IDK?!)
- [ ] check pages with Axe
- [ ] setup danger and make sure
  - [ ] version is increased before commit/push
  - [ ] no push if no audit for current version
  - [ ] note about linting or run linter before commit
- [ ] check all pages with screen reader
- [ ] check all pages with reduced motion
- [ ] check all pages with reduced transparency
- [x] remove source maps in production builds (not possible but ok)
- [x] add new theme switch design, current does not work properly with `mix-blend-mode`
- [x] PWA: add service worker for offline usage (`gatsby-plugin-offline`)
- [x] ~~add tests?!~~
- [x] ~~move from bash script to [Nim][2]~~
- [ ] (auto) check markdown for ["Vary sentence length"][3]
- [ ] (auto) check markdown for [Readability][4]
- [ ] (auto) generate [rich snippets][5]
- [ ] use [Scheme customizations][6] to map post meta e.g. for authors
- [ ] use new iPad and Apple Pencil to make ["Marvin/Design"-Logo][8]
  - [x] current logo is ok!
  - [ ] new color profile
  - [ ] use better [color system][10]
- [x] light theme
- [ ] ~~Eventually new Font: [ZOOM-PRO][9]~~ (too expensive)
- [x] open source the code 🤫

[1]: https://www.gatsbyjs.org/packages/gatsby-plugin-preact/
[2]: https://nim-lang.org/docs/tut1.html
[3]: https://github.com/wooorm/write-music
[4]: https://wooorm.com/readability/
[5]: https://www.gatsbyjs.org/docs/seo/
[6]: https://www.gatsbyjs.org/docs/schema-customization/#foreign-key-fields
[8]: https://cdn.dribbble.com/uploads/2566/original/3b90b34984de0d727ac99e2fc28afda8.png
[9]: https://thedesignersfoundry.com/zoom-pro
[10]: https://stripe.com/de/blog/accessible-color-systems
