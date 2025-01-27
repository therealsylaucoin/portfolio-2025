export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    hunter: '#121E19',
    green: '#95BF8F',
    purple: '#32021F',
    mauve: '#A799B7'
  },
  fonts: {
    base: '1rem',
    md: '1.5rem',
    l: '3rem',
    xl: '4rem'
  }
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};