import { BurgerBTN as BTN } from './styled';
import { BurgerIcon } from '../../Layouts/Icons/icons';

function BurgerBTN({setActiveNavBurger}) {
  return (
    <BTN onClick={() => setActiveNavBurger((prevState) => !prevState)}>
      <BurgerIcon />
    </BTN>
  );
}

export default BurgerBTN;
