import { useContext } from 'react';

import { DOMcontext } from '../../store/context/DOMContext';

import {
  FeedIcon,
  ChatIcon,
  PlayIcon,
  GroupIcon,
  BookmarkIcon,
  QuestionIcon,
  CaseIcon,
  CalendarIcon,
  GraduationIcon,
} from '../Layouts/Icons/icons';
import { UserEventsBox, UserEventsList } from './styled';
import { DetailedIcon } from '../Layouts';

function UserEvents() {
  const { activeNavBurger, windowPosition } = useContext(DOMcontext);

  return (
    <UserEventsBox active={activeNavBurger} position={windowPosition}>
      <UserEventsList>
        <DetailedIcon Icon={<FeedIcon />} caption='feed' iconSize='2rem' />
        <DetailedIcon Icon={<ChatIcon />} caption='chat' iconSize='1.8rem' />
        <DetailedIcon Icon={<PlayIcon />} caption='videos' iconSize='1.8rem' />
        <DetailedIcon Icon={<GroupIcon />} caption='groups' iconSize='1.8rem' />
        <DetailedIcon Icon={<BookmarkIcon />} caption='bookmarks' iconSize='1.8rem' />
        <DetailedIcon Icon={<QuestionIcon />} caption='questions' iconSize='1.8rem' />
        <DetailedIcon Icon={<CaseIcon />} caption='jobs' iconSize='1.8rem' />
        <DetailedIcon Icon={<CalendarIcon />} caption='events' iconSize='1.8rem' />
        <DetailedIcon Icon={<GraduationIcon />} caption='courses' iconSize='2.2rem' />
      </UserEventsList>
    </UserEventsBox>
  );
}

export default UserEvents;
