import { InfoBox, Info, Message, Text } from './styled';
import OptModal from './OptModal';
import { StandIcon } from '../../../Layouts/Icons/icons';

function ReligianOpinion({ opinion }) {
  return (
    <InfoBox>
      <StandIcon />
      {opinion ? (
        <>
          <Info>
            <strong>{opinion.opinion}</strong>
            <Text>{opinion.description}</Text>
          </Info>
          <OptModal />
        </>
      ) : (
        <Message>there are no details about religian opinion</Message>
      )}
    </InfoBox>
  );
}

export default ReligianOpinion;
