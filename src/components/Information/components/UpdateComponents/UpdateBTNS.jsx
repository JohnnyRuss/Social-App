import { Devider, BTN } from './InfoBlockStyled';

function UpdateBTNS({ cancelHandler }) {
  return (
    <Devider justify='flex-end' border>
      <BTN cancel onClick={cancelHandler}>
        cancel
      </BTN>
      <BTN save type='submit'>
        save
      </BTN>
    </Devider>
  );
}

export default UpdateBTNS;
