import { InfoBox, Info, Message } from './styled';
import { CaseIcon } from '../../../Layouts/Icons/icons';
import OptModal from './OptModal';

function WorkPlace({ workplace }) {
  return (
    <InfoBox>
      <CaseIcon />
      {workplace ? (
        <>
          <Info>
            works in <strong>{workplace?.company}</strong> as <strong>{workplace?.position}</strong>
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about workplace</Message>
      )}
    </InfoBox>
  );
}

export default WorkPlace;
