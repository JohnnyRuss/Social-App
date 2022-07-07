import styled from 'styled-components';

export const FriendsBox = styled.div`
  background: rgba(242, 242, 242, 1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 1rem;
`;

export const FriendTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TitleMiniBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FriendTitle = styled.h3`
  font-size: 2rem;
`;

export const FriendsAmount = styled.span``;

export const ShowAllLink = styled.span`
  font-size: 1.4rem;
  color: rgba(3, 85, 191, 1);
  cursor: pointer;
`;

export const FriendsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 2rem;
`;

export const Friend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FriendImgBox = styled.div``;

export const UserName = styled.span`
  font-weight: 500;
`;
