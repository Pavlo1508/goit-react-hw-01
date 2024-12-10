import FriendListItem from '../FriendListItem/FriendListItem'
import friendListStyles from './FriendList.module.css'

const FriendList = ({friends}) => {
	return (
    <ul className={friendListStyles.friendList}>
      {friends.map((friend) => (
        <li className={friendListStyles.friendListItem} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;