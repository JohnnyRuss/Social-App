import { css } from 'styled-components';

export const largeDesktop_1920 = (props) => {
  return css`
    @media (max-width: 120em) {
      ${props}
    }
  `;
};

export const mediumDesktop_1600 = (props) => {
  return css`
    @media (max-width: 100em) {
      ${props}
    }
  `;
};

export const smallDesktop_1280 = (props) => {
  return css`
    @media (max-width: 80em) {
      ${props}
    }
  `;
};

export const tablet_1000 = (props) => {
  return css`
    @media (max-width: 62.5em) {
      ${props}
    }
  `;
};

export const tabletMedium_880 = (props) => {
  return css`
    @media (max-width: 55em) {
      ${props}
    }
  `;
};

export const small_640 = (props) => {
  return css`
    @media (max-width: 40em) {
      ${props}
    }
  `;
};

export const mobile_480 = (props) => {
  return css`
    @media (max-width: 30em) {
      ${props}
    }
  `;
};
