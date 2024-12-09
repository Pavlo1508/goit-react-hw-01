import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import profileData from "./assets/profile.json";
import friendList from "./assets/friendList.json"
import transactionHistory from "./assets/transactionHistory.json";

const App = () => {
  return (
    <>
      <div className="profileMainBox">
        {profileData.map((user) => (
          <div className="cardSteck" key={user.id}>
            <Profile {...user} />
          </div>
        ))}
      </div>
      <ul className="friendList">
        {friendList.map((friend) => (
          <li className="friendListItem" key={friend.id}>
            <FriendList {...friend} />
          </li>
        ))}
      </ul>
      <table className="transactionTable">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactionHistory.map((transaction) => (
            <TransactionHistory {...transaction} key={transaction.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
