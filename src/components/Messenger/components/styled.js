import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  height: 90vh;
`;

// SideBar

export const SideBarContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const SideBarHeading = styled.div`
  font-size: 2.6rem;
  font-weight: 700;
  padding-left: 2rem;
`;

export const ConversationBox = styled.div`
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

export const MiniBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Message = styled.p`
  font-size: 1.2rem;
`;

// Feed
export const FeedContainer = styled.div`
  flex: 3;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const FeedHeadingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid grey;
`;

export const MessageBox = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 0.5rem;
  width: auto;
  max-width: 80%;
  font-size: 1.2rem;
  font-weight: 400;

  ${({ active }) => {
    return active
      ? `
    align-self:flex-end;
    `
      : ``;
  }}
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;

  & svg {
    display: block;
    cursor: pointer;
    color: rgba(3, 85, 191, 1);
  }
`;

export const InputBox = styled.form`
  width: 100%;
  margin-top: auto;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  padding: 0 1rem 0 0.5rem;
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  border-radius: 1.5rem;
  padding: 0 1rem;
  padding-top: 0.6rem;
  background: rgba(242, 242, 242, 1);
  outline: none;

  &::placeholder {
    font-size: 1.6rem;
  }
`;

// Reuse

export const Text = styled.p``;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
  height: 85vh;
  overflow: scroll;
  overflow-x: hidden;
  padding: 1rem;

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

export const Author = styled.h2`
  font-size: 1.4rem;
`;
