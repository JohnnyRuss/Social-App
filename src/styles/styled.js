const colors = {
  whiteColor: 'rgba(255, 255, 255, 1)',
  whiteShadeColor: 'rgba(242, 242, 242, 1)',
  darkGreyColor: 'rgba(42, 42, 42, 0.6)',
  blackColor: '#181818',
  blueColor: 'rgba(3, 85, 191, 1)',
  blueTintColor: 'rgba(125, 176, 242, 1)',
};

const fontSizes = {
  smallestSize: '1rem',
  smallerSize: '1.2rem',
  smallSize: '1.4rem',
  regullarSize: '1.6rem',
  bigSize: '2rem',
  largeSize: '2.4rem',
  headingSize: '3.2rem',
  extraLargeSize: '4rem',
  superLargeSize: '5.2rem',
};

export const color = (color) => {
  return colors[color];
};

export const fontSize = (size) => {
  return `font-size:${fontSizes[size]}`;
};

export const flexBox = (direction) => {
  return `
    display: flex;
    flex-direction: ${direction || 'row'};
  `;
};

export const flexProperty = (props) => {
  return `
    justify-content: ${props?.justify || 'flex-start'};
    align-items: ${props?.align || 'flex-start'};
  `;
};

export const gridBox = (props) => {
  return `
    display: grid;
    grid-template: repeat(${props?.row}) / repeat(${props.column});
  `;
};

export const gridProperty = (props) => {
  return `
    justify-content: ${props?.justify || 'flex-start'};
    align-items: ${props?.align || 'flex-start'};
  `;
};

export const gridAutoFill = (props) => {
  return `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${props?.min}, 1fr));
  `;
};

export const gridAutoFit = (props) => {
  return `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${props?.min}, 1fr));
  `;
};

export const fitImage = (props) => {
  return `
    object-position: center;
    object-fit: ${props?.fit || 'cover'};
    width: 100%;
    height: 100%;
  `;
};

export const fitBgImage = (props) => {
  return `
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  `;
};

export const scrollBar = (props) => {
  return `
    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: ${props?.width || '1rem'};
    }

    &::-webkit-scrollbar-thumb {
      background: ${colors.blackColor};
      border-radius: 1rem;
    }
    
    &::-webkit-scrollbar-track {
      background: ${colors.whiteShadeColor};
      border-radius: 2rem;
      margin-block-start: ${props?.marginBlockStart || '0rem'};
    }
  `;
};

export const border = (props) => {
  return `
    border: 1px solid ${props?.color || 'grey'};
    border-radius: ${props?.radius || 'none'};
  `;
};

export const boxShadowBlack = (props) => {
  return `
    box-shadow: ${props?.horizontal || '0px'} ${props?.vertical || '0px'} ${
    props?.spread || '5px'
  } ${props?.radial || '1px'} rgba(0, 0, 0, ${props?.opacity || 0.4});
  `;
};

export const boxShadowWhite = (props) => {
  return `
    box-shadow: 1px 2px ${props?.spread || '15px'} ${props?.radial || '5px'} rgba(255, 255, 255, ${
    props?.opacity || 0.3
  });
  `;
};

export const textShadow = (props) => {
  return `
    text-shadow: ${props?.horizontal || '2px'} ${props?.vertical || '3px'} ${
    props?.spread || '5px'
  } rgba(0, 0, 0, ${props?.opacity || 0.3});
  `;
};

export const gradientBackground = (props) => {
  return `
    background-image: linear-gradient(to right bottom, ${colors[props?.mainColor]} ${
    props?.percentage || '50%'
  }, ${colors[props?.secondaryColor]});
  `;
};
