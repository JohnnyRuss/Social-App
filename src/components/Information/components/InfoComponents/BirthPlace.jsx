import { InfoBox, Info, Message } from './styled';
import OptModal from './OptModal';
import { LocationIcon } from '../../../Layouts/Icons/icons';

function BirthPlace({ birthplace }) {
  return (
    <InfoBox>
      <LocationIcon />
      {birthplace ? (
        <>
          <Info>
            from <strong>{birthplace.city}</strong> <strong>{birthplace.country}</strong>
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about birth place</Message>
      )}
    </InfoBox>
  );
}

export default BirthPlace;
