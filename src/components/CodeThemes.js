// TODO: match colors with color themes

export const darkTheme = {
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(92, 99, 112)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['keyword', 'selector', 'changed'],
      style: {
        color: 'rgb(198, 120, 221)',
      },
    },
    {
      types: ['operator'],
      style: {
        color: 'rgb(171, 178, 191)',
      },
    },
    {
      types: ['constant', 'number', 'builtin', 'attr-name'],
      style: {
        color: 'rgb(209, 154, 102)',
      },
    },
    {
      types: ['char', 'symbol'],
      style: {
        color: 'rgb(86, 182, 194)',
      },
    },
    {
      types: ['variable', 'tag', 'deleted'],
      style: {
        color: 'rgb(224, 108, 117)',
      },
    },
    {
      types: ['string', 'inserted'],
      style: {
        color: 'rgb(152, 195, 121)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(92, 99, 112)',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(97, 175, 239)',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgb(229, 192, 123)',
      },
    },
  ],
}

export const lightTheme = {
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(160, 161, 167)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['keyword', 'selector', 'changed'],
      style: {
        color: 'rgb(166, 38, 164)',
      },
    },
    {
      types: ['operator'],
      style: {
        color: 'rgb(56, 58, 66)',
      },
    },
    {
      types: ['constant', 'number', 'builtin', 'attr-name'],
      style: {
        color: 'rgb(152, 104, 1)',
      },
    },
    {
      types: ['char', 'symbol'],
      style: {
        color: 'rgb(1, 132, 188)',
      },
    },
    {
      types: ['variable', 'tag', 'deleted'],
      style: {
        color: 'rgb(228, 86, 73)',
      },
    },
    {
      types: ['string', 'inserted'],
      style: {
        color: 'rgb(80, 161, 79)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(160, 161, 167)',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(64, 120, 242)',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgb(193, 132, 1)',
      },
    },
  ],
}
