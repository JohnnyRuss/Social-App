import { InfoBox, Info, Message } from './styled';
import OptModal from './OptModal';
import { HomeIcon } from '../../../Layouts/Icons/icons';

function LivingPlace({ livingplace }) {
  return (
    <InfoBox>
      <HomeIcon />
      {livingplace ? (
        <>
          <Info>
            lives in <strong>{livingplace.city}</strong> <strong>{livingplace.country}</strong>
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about living place</Message>
      )}
    </InfoBox>
  );
}

export default LivingPlace;
