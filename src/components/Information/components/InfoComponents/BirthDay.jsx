import { InfoBox, Info, Message } from './styled';
import OptModal from './OptModal';
import { BirthDayIcon } from '../../../Layouts/Icons/icons';

function BirthDay({ birthday }) {
  return (
    <InfoBox>
      <BirthDayIcon />
      {birthday ? (
        <>
          <Info>
            was born in{' '}
            <strong>
              {new Intl.DateTimeFormat('en-us', { dateStyle: 'medium' }).format(new Date(birthday))}
            </strong>
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about birth date</Message>
      )}
    </InfoBox>
  );
}

export default BirthDay;
