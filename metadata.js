module.exports = {
  siteTitle: `Marvin/Digital`,
  siteTitleShort: 'M/D',
  siteAuthor: `Marvin Heilemann`,
  siteDescription: `Me, Myself and I – Projects, Photography, Writings and even more about Marvin Heilemann (also named muuvmuuv)`,
  siteKeywords: [
    'marvin',
    'heilemann',
    'muuvmuuv',
    'portfolio',
    'webdesign',
    'programming',
    'writings',
    'photography',
  ],
  siteUrl: process.env.SITE_URL || 'https://marvin.digital',
  siteLanguage: 'en',
  menu: [
    {
      name: 'About',
      link: '/about',
      children: [
        {
          name: 'Education',
          link: '/about/education',
        },
        {
          name: 'Experience',
          link: '/about/experience',
        },
        {
          name: 'Awards',
          link: '/about/awards',
        },
        {
          name: 'Bookmarks',
          link: '/about/bookmarks',
        },
      ],
    },
    {
      name: 'Setup',
      link: 'https://www.notion.so/marvins/Setup-9ad349afe68942ae807dc31c9afccd7d',
    },
    {
      name: 'Projects',
      link: '/projects',
    },
    {
      name: 'Photography',
      link: '/photography',
    },
    {
      name: 'Writings',
      link: '/writings',
    },
  ],
  footer: [
    {
      name: 'Credits',
      link: '/credits',
    },
    {
      name: 'Changelog',
      link: '/changelog',
    },
    {
      name: 'Issues',
      link: '/issues',
    },
    {
      name: 'Analytics',
      link: 'https://simpleanalytics.com/marvin.digital',
    },
    {
      name: 'Status',
      link: 'https://status.marvin.digital',
    },
    {
      name: 'Imprint',
      link: '/imprint',
    },
    {
      name: 'Privacy',
      link: '/privacy',
    },
  ],
  social: [
    {
      name: 'Twitter',
      icon: 'twitter',
      user: 'muuvmuuv',
      link: 'https://twitter.com/muuvmuuv',
    },
    {
      name: 'GitHub',
      user: 'muuvmuuv',
      icon: 'github',
      link: 'https://github.com/muuvmuuv',
    },
    {
      name: 'Instagram',
      icon: 'instagram',
      user: 'marvin.heilemann',
      link: 'https://www.instagram.com/marvin.heilemann/',
    },
    {
      name: 'Dribbble',
      icon: 'dribbble',
      user: 'muuvmuuv',
      link: 'https://dribbble.com/muuvmuuv',
    },
    {
      name: 'Unsplash',
      icon: 'unsplash',
      user: 'muuvmuuv',
      link: 'https://unsplash.com/@muuvmuuv',
    },
    {
      name: 'Discord',
      icon: 'discord',
      user: 'muuvmuuv',
      link: 'https://discord.gg/NV4fymj',
    },
    {
      name: 'League of Legends',
      icon: 'league-of-legends',
      user: 'muuvmuuv',
      link: 'https://blitz.gg/lol/profile/euw1/muuvmuuv',
    },
  ],
}
