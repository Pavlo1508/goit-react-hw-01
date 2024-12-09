import TransactionHistoryStyles from './TransactionHistory.module.css';

const TransactionHistory = ({ type, amount, currency }) => {
  return (
    <>
      <tr className={TransactionHistoryStyles.row}>
        <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
};

export default TransactionHistory;
