import styled from 'styled-components';

export const HobbiesBox = styled.div`
  background: rgba(242, 242, 242, 1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 1rem;
`;

export const HobbiesTitle = styled.h3`
  font-size: 2rem;
`;

export const HobbiesBTN = styled.button`
  font-size: 1.4rem;
  background: white;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  border-radius: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const HobbiesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 0.5rem;
`;

export const HobbiesListItem = styled.li`
  background: white;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;
