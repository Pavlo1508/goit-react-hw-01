import clsx from "clsx";
import friendListItemStyles from './FriendListItem.module.css'

const FriendListItem = ({ friend }) => {
  return (
    <div>
      <img
        className={friendListItemStyles.ava}
        src={friend.avatar}
        alt="sAvatar"
        width="48"
      />
			<p
				className={friendListItemStyles.name}
			>
				{friend.name}
			</p>
      <p
        className={clsx(
          friend.isOnline
            ? friendListItemStyles.green
            : friendListItemStyles.red
        )}
      >
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;