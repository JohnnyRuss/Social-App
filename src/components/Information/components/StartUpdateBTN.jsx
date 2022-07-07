import { AddBTN, IconBox, Text } from './InfoBlockStyled';
import { RoundedPlusIcon } from '../../Layouts/Icons/icons';

function StartUpdateBTN({ startUpdateHandler, caption }) {
  return (
    <AddBTN onClick={startUpdateHandler}>
      <IconBox>
        <RoundedPlusIcon />
      </IconBox>
      <Text>{caption}</Text>
    </AddBTN>
  );
}

export default StartUpdateBTN;
