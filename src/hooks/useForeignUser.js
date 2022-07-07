import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useForeignUser = (user) => {
  const { userId } = useParams();
  const [foreignUser, setForeignUser] = useState(false);
  const { _id } = useSelector((state) => state.userBasics.user);

  useEffect(() => {
    let foreign;
    if (!user) foreign = userId !== _id;
    if (user) foreign = userId !== user;
    setForeignUser(foreign);
  }, [userId, _id, user]);

  return { foreignUser, _id, profileOwner: userId };
};

export default useForeignUser;
