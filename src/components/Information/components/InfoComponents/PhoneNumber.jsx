import { InfoBox, Info, Message } from './styled';
import OptModal from './OptModal';
import { PhoneIcon } from '../../../Layouts/Icons/icons';

function PhoneNumber({ phonenumber }) {
  return (
    <InfoBox>
      <PhoneIcon />
      {phonenumber ? (
        <>
          <Info>
            <strong>{phonenumber}</strong>
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about phonenumber</Message>
      )}
    </InfoBox>
  );
}

export default PhoneNumber;
