import { Fragment } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Albums as AllAlbums } from '../../components/Photos';

function Albums() {
  //prettier-ignore
  const candidatePaths = ['profileImage', 'coverImage', 'timeline'];
  const { albumId } = useParams();
  const possibleRoute = candidatePaths.includes(albumId);

  return (
    <Fragment>
      {possibleRoute && <Outlet />}
      {!possibleRoute && <AllAlbums />}
    </Fragment>
  );
}

export default Albums;
