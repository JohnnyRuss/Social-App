import { HobbiesBox, HobbiesTitle, HobbiesBTN } from './HobbiesStyled';
import {HobbiesList} from './';

function Hobbies({ hobbies }) {
  return (
    <HobbiesBox>
      <HobbiesTitle>intro</HobbiesTitle>
      <HobbiesBTN>add bio</HobbiesBTN>
      <HobbiesBTN>edit details</HobbiesBTN>
      <HobbiesList hobbies={hobbies} />
      <HobbiesBTN>add hobby</HobbiesBTN>
    </HobbiesBox>
  );
}

export default Hobbies;
