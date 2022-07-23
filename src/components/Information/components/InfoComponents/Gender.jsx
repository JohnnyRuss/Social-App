import { InfoBox, Info, Message } from './styled';
import OptModal from './OptModal';
import { MaleIcon, FemaleIcon } from '../../../Layouts/Icons/icons';

function Gender({gender}) {
  return (
    <InfoBox>
      {gender === 'male' ? <MaleIcon /> : <FemaleIcon />}
      {gender ? (
        <>
          <Info>
            <strong>{gender}</strong>
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about gender</Message>
      )}
    </InfoBox>
  );
}

export default Gender;
