import { useState } from 'react';

const useRestriction = () => {
  const [activeUser, setActiveUser] = useState(localStorage.getItem('user'));

  return activeUser;
};

export default useRestriction;
