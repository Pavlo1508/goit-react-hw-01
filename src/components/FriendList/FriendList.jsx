import clsx from 'clsx';
import FriendListStyles from './FriendList.module.css';

const FriendList = ({ avatar, name, isOnline }) => {
	return (
    <div>
      <img
        className={FriendListStyles.ava}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={FriendListStyles.name}>{name}</p>
      <p
        className={clsx(
          isOnline ? FriendListStyles.green : FriendListStyles.red
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendList;