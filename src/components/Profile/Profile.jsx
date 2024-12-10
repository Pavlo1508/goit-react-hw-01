import ProfileStyles from "./Profile.module.css";

const User = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={ProfileStyles.profilebox}>
      <div className={ProfileStyles.main}>
        <img className={ProfileStyles.ava} src={avatar} alt="User avatar" />
        <p className={ProfileStyles.username}>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={ProfileStyles.stats}>
        <li className={ProfileStyles.stats_item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={ProfileStyles.stats_item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={ProfileStyles.stats_item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default User;