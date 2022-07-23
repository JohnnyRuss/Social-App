import { InfoBox, Info, Message } from './styled';
import OptModal from './OptModal';
import { LanguageIcon } from '../../../Layouts/Icons/icons';

function Language({languages}) {
  return (
    <InfoBox>
      <LanguageIcon />
      {languages?.[0] ? (
        <>
          <Info>
            speaks{' '}
            {languages.map((lng) => (
              <strong key={lng._id}>{lng.language}</strong>
            ))}
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about languages</Message>
      )}
    </InfoBox>
  );
}

export default Language;
