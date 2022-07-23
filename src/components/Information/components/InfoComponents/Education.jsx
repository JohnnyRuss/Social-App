import { InfoBox, Info, Message } from './styled';
import OptModal from './OptModal';
import { GraduationIcon } from '../../../Layouts/Icons/icons';

function Education({ education }) {
  return (
    <InfoBox>
      <GraduationIcon />
      {education ? (
        <>
          <Info>
            {education.graduated ? 'graduated' : 'studies in'} <strong>{education.collage}</strong>{' '}
            at faculty of {<strong>{education.faculty}</strong>}
            {education.graduated ? ' in ' : ' from '}
            {
              <strong>
                {education.graduated
                  ? new Date(education.date.to).getFullYear()
                  : new Date(education.date.from).getFullYear()}
              </strong>
            }
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about education</Message>
      )}
    </InfoBox>
  );
}

export default Education;
