import { InfoBox, Info, Message, Text } from './styled';
import OptModal from './OptModal';
import { SpeakerIcon } from '../../../Layouts/Icons/icons';

function PoliticianOpinion({ opinion }) {
  return (
    <InfoBox>
      <SpeakerIcon />
      {opinion ? (
        <>
          <Info>
            <strong>{opinion.opinion}</strong>
            <Text>{opinion.description}</Text>
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about politician opinion</Message>
      )}
    </InfoBox>
  );
}

export default PoliticianOpinion;
