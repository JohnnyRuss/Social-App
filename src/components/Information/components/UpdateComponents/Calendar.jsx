import { Fragment, useState, useEffect } from 'react';
import Calendar from 'react-calendar';

import { CalendarBox } from './InfoBlockStyled';

function DatePicker({ handler }) {
  const [date, setDate] = useState(new Date());

  const dateHandler = (calendar) => setDate(calendar);

  useEffect(() => {
    handler(date);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <Fragment>
      <CalendarBox>
        <Calendar onChange={dateHandler} value={date} />
      </CalendarBox>
    </Fragment>
  );
}

export default DatePicker;
