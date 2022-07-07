import styled from 'styled-components';

export const SpinnerBox = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;

  ${({ color }) => {
    return color
      ? `
      color: ${color};
      `
      : 'color: rgba(3, 85, 191, 1);';
  }}

  & svg {
    animation: spinner 1s ease infinite;
  }

  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;
