import { ChangesBox, BTN } from './UserInfoStyled';

function SaveChanges({ cancelFileChangeHandler, saveChangeHandler }) {
  return (
    <ChangesBox>
      <BTN onClick={cancelFileChangeHandler} cancel>
        cancel
      </BTN>
      <BTN onClick={saveChangeHandler}>save changes</BTN>
    </ChangesBox>
  );
}

export default SaveChanges;
