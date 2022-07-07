import { Image } from '../../Layouts';
import styles from './NewFriends.module.scss';

function NewFriends({ data }) {
  return (
    <ul className={styles.container}>
      {data?.map((friend) => (
        <li className={styles.item} key={friend._id}>
          <Image src={friend.profileImg.image} dimention={['3rem', '3rem']} radius='50%' />
        </li>
      ))}
    </ul>
  );
}

export default NewFriends;
