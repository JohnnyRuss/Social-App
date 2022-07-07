import { Link } from 'react-router-dom';
import { Badge } from '../../Layouts';

function LinkedBadge({ path, Icon, iconSize, content }) {
  return (
    <Link to={path}>
      <Badge Icon={<Icon />} content={undefined} iconSize={iconSize} />
    </Link>
  );
}

export default LinkedBadge;
