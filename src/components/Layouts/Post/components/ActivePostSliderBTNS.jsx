import { Fragment } from 'react';

import {SliderBTN} from "./styled"
import { ArrowLeftRectingle, ArrowRightRectingle } from '../../Icons/icons';

function ActivePostSliderBTNS({handlePreviousPost, handleNextPost}) {
  return (
    <Fragment>
      <SliderBTN left onClick={handlePreviousPost}>
        <ArrowLeftRectingle />
      </SliderBTN>
      <SliderBTN right onClick={handleNextPost}>
        <ArrowRightRectingle />
      </SliderBTN>
    </Fragment>
  );
}

export default ActivePostSliderBTNS;
