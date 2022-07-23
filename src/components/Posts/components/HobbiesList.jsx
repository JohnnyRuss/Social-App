import { HobbiesList as Hobbies } from './HobbiesStyled';
import { HobbiesListItem } from './';

function HobbiesList({ hobbies }) {
  return (
    <Hobbies>
      {hobbies?.map?.((hobby, i) => (
        <HobbiesListItem key={hobby._id} hobby={hobby.hobby} />
      ))}
    </Hobbies>
  );
}

export default HobbiesList;
