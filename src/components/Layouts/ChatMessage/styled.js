import styled from 'styled-components';

export const Image = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
  align-self: flex-end;
  margin-bottom: 0.5rem;
`;

export const GroupBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const MessageText = styled.span`
  background: rgba(242, 242, 242, 1);
  padding: 0.7rem 1rem;
  border-radius: 2rem;
  width: calc(100%-2rem);

  ${({ active }) => {
    return active
      ? `
    background: rgba(3, 85, 191, 1);
    color:white;
    `
      : ``;
  }}

  ${({ first, last, active }) => {
    if (first && active) return `border-bottom-right-radius: 0rem;`;
    if (first && !active) return `border-bottom-left-radius: 0rem;`;
    if (last && active) return `border-top-right-radius: 0rem;`;
    if (last && !active) return `border-top-left-radius: 0rem;`;
    if (!first && !last && active)
      return `border-top-right-radius:0rem; border-bottom-right-radius:0rem;`;
    if (!first && !last && !active)
      return `border-top-left-radius:0rem; border-bottom-left-radius:0rem;`;
  }}
`;
