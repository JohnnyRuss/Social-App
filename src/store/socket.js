import { io } from 'socket.io-client';

export const socket = io('ws://localhost:8900');

if (localStorage.getItem('persist:user')) {
  const userData = JSON.parse(JSON.parse(localStorage.getItem('persist:user'))?.user);

  const user = {
    _id: userData._id,
    firstName: userData.firstName,
    profileImg: userData.profileImg,
  };

  socket.emit('addUser', user);
}
