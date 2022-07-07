import styled from 'styled-components';

export const AlbumBox = styled.div`
  background: rgba(242, 242, 242, 1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 1rem;
`;

export const AlbumTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AlbumTitle = styled.h3`
  font-size: 2rem;
`;

export const ShowAllLink = styled.span`
  font-size: 1.4rem;
  color: rgba(3, 85, 191, 1);
  cursor: pointer;
`;

export const PhotosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(33.3%, 1fr));
  gap: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export const Photo = styled.div`
  cursor: pointer;
`;
