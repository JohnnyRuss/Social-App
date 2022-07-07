import { OptBTN } from './friendsListStyled';
import { FriendsListOptModal } from './';
import { DotsHorizontalIcon } from '../../Layouts/Icons/icons';

function FriendsListOptBTN({ setActiveOptions, activeOptions }) {
  return (
    <OptBTN onClick={() => setActiveOptions((prevState) => !prevState)}>
      <DotsHorizontalIcon />
      {activeOptions && <FriendsListOptModal />}
    </OptBTN>
  );
}

export default FriendsListOptBTN;
