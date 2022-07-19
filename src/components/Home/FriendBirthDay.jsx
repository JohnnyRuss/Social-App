import { BirthdayBox, BirthDayInfo } from './styled';
import { Image } from '../Layouts';

function FriendBirthDay() {
  return (
    <BirthdayBox>
      <Image src='/assets/gift-box.svg' dimention={['6rem', '6rem']} />
      <BirthDayInfo>
        <span>
          <strong>Maria Servantez</strong>{' '}
        </span>
        and
        <strong>
          <span> 3 </span>other friends{' '}
        </strong>
        have a brthday today.
      </BirthDayInfo>
    </BirthdayBox>
  );
}

export default FriendBirthDay;
