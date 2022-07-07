import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 999;
  right: 2.5rem;
  top: 6rem;
  background: white;
  box-shadow: 0px 0px 2px;
  width: 35rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const Text = styled.p``;

export const IconBox = styled.span`
  ${({ size }) => {
    return size
      ? `
    font-size:${size}rem;
    `
      : ``;
  }}
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
  max-height: 70vh;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: rgba(242, 242, 242, 1);
    border-radius: 2rem;
  }
`;

export const ContentItemContainer = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
  transition: background 0.15s ease;
  padding: 0.5rem;
  border-radius: 0.7rem;
  margin-right: 0.5rem;

  &:hover {
    background: rgba(242, 242, 242, 1);
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
`;

export const Author = styled.h2`
  font-size: 1.4rem;
`;

export const MiniBox = styled.div`
  display: flex;
  gap: 1rem;

  ${({ direction }) => {
    return `
    flex-direction:${direction};
    align-items: ${direction === 'row' ? `center` : `flex-start`}
    `;
  }}
`;

export const Message = styled.p`
  font-size: 1.2rem;
`;

export const LinkEl = styled.span`
  margin-top: auto;
  align-self: center;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: underline;
  color: rgba(3, 85, 191, 1);
  cursor: pointer;
`;
