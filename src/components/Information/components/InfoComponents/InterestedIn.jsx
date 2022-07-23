import { InfoBox, Info, Message } from './styled';
import OptModal from './OptModal';
import { InterestedInIcon } from '../../../Layouts/Icons/icons';

function InterestedIn({ interest }) {
  return (
    <InfoBox>
      <InterestedInIcon />
      {interest ? (
        <>
          <Info>
            interested in <strong>{interest}</strong>
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about interests</Message>
      )}
    </InfoBox>
  );
}

export default InterestedIn;
