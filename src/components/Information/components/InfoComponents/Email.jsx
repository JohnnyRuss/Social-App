import { InfoBox, Info, Message } from './styled';
import OptModal from './OptModal';
import { EmailIcon } from '../../../Layouts/Icons/icons';

function Email({ email }) {
  return (
    <InfoBox>
      <EmailIcon />
      {email ? (
        <>
          <Info>
            <strong>{email}</strong>
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about email</Message>
      )}
    </InfoBox>
  );
}

export default Email;
