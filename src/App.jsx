import Profile from "./components/Profile/Profile";
import profileData from "./assets/profile.json";
// ================= //
import FriendsList from './components/FriendList/FriendList'
import friends from './assets/friendList.json';
// ================= //
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from './assets/transactionHistory.json'

const App = () => {
  return (
    <>
      <div className="profileMainBox">
        {profileData.map((user) => (
          <div key={user.id}>
            <Profile {...user} />
          </div>
        ))}
      </div>
      {/* ======================= */}
      <FriendsList friends={friends} />
			{/* ======================= */}
			<TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;