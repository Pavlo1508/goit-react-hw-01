import './TransactionHistory.module.css'

const TransactionHistory = ({ type, amount, currency }) => {
  return (
    <>
      <tr>
        <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
};

export default TransactionHistory;
