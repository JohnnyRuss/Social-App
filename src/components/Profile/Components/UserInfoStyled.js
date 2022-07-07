import styled from 'styled-components';
import { mediumDesktop_1600, smallDesktop_1280, tablet_1000, tabletMedium_880 } from '../../media';

export const UserInfoBox = styled.div`
  display: inline-block;
  position: absolute;
  margin-left: 4rem;

  ${tablet_1000({
    marginLeft: '3.5rem',
  })}

  ${tabletMedium_880({
    position: 'relative',
    margin: '0 auto',
    top: '-5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  })}
`;

export const UserName = styled.h2`
  padding-top: 1rem;
  font-size: 3rem;

  ${mediumDesktop_1600({
    fontSize: '2.5rem',
    paddingTop: '0.5rem',
  })}

  ${smallDesktop_1280({
    fontSize: '2rem',
  })}

${tablet_1000({
    fontSize: '1.8rem',
  })}
`;

export const FriendsAmount = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  padding-top: 1rem;

  ${mediumDesktop_1600({
    paddingTop: '0.5rem',
  })}
`;

export const ChangesBox = styled.div`
  position: absolute;
  display: flex;
  gap: 1rem;
  top: 0;
  left: 100%;
  width: 25rem;
  margin-left: 2rem;
  margin-top: 1.5rem;
  font-weight: 500;
  font-size: 1.2rem;

  ${tabletMedium_880({
    position: 'relative',
    margin: '0 auto',
    left: 0,
    top: '2.5rem',
  })}
`;

export const BTN = styled.button`
  background: royalblue;
  padding: 0.7rem 2rem;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;

  ${({ cancel }) => {
    return cancel ? 'background:rgba(242, 242, 242, 1); color:#181818 ' : '';
  }}
`;
