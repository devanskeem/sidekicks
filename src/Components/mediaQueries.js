const size = {
  mobileS:'320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptopL: '1440px',
  laptop: '1024px',
  desktop: '2560px'
}

export const device ={
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptopL:`(min-width: ${size.laptopL})`, 
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
}