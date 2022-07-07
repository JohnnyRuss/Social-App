import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Profile,
  LogIn,
  Posts,
  Information,
  Friends,
  MuntualFriends,
  Photos,
  Videos,
  Restriction,
  Register,
  AllFriends,
  RecentlyAddedFriends,
  FriendsBirthDays,
  Messenger,
  ConversationFeed,
  AllPhotos,
  Albums,
  ActiveAlbum,
} from './pages';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route element={<Restriction />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile/:userId' element={<Profile />}>
            <Route path='' element={<Posts />} />
            <Route path='posts' element={<Posts />} />
            <Route path='information' element={<Information />} />
            <Route path='friends' element={<Friends />}>
              <Route path='muntualFriends' element={<MuntualFriends />} />
              <Route path='allFriends' element={<AllFriends />} />
              <Route path='recentlyAddedFriends' element={<RecentlyAddedFriends />} />
              <Route path='upComingBirthdays' element={<FriendsBirthDays />} />
            </Route>
            <Route path='photos' element={<Photos />}>
              <Route path='allPhotos' element={<AllPhotos />} />
              <Route path='albums' element={<Albums />}>
                <Route path=':albumId' element={<ActiveAlbum />} />
              </Route>
            </Route>
            <Route path='videos' element={<Videos />} />
          </Route>
          <Route path='/messages' element={<Messenger />}>
            <Route path=':conversationId' element={<ConversationFeed />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
