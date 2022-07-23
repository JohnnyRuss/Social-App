import { InfoBox, Info, Message } from './styled';
import OptModal from './OptModal';
import { ConversationIcon } from '../../../Layouts/Icons/icons';

function Relationship({ relationship }) {
  return (
    <InfoBox>
      <ConversationIcon />
      {relationship ? (
        <>
          <Info>
            <strong>{relationship}</strong>
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about relationship</Message>
      )}
    </InfoBox>
  );
}

export default Relationship;
