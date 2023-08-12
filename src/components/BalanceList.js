import Balance from "./Balance";

function BalanceList({ accounts }) {
  const renderAccounts = accounts.map((account, index) => {
    return (
      <Balance account={account} key={account.name} currentIndex={index} />
    );
  });
  return (
    <div className="border border-info border-3 rounded p-3 mt-3">
      <div className="accordion" id="accordionExample">
        {renderAccounts}
      </div>
    </div>
  );
}

export default BalanceList;
