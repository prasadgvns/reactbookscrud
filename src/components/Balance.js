import { useContext } from "react";
import ExpenseContext from "../context/expense";

import RupeeSvg from "../svg/rupee";

function Balance({ account, currentIndex }) {
  const { name, balance } = account;
  const { getExpensedAmount } = useContext(ExpenseContext);

  const totalExpense = getExpensedAmount(name);

  const remainingBalance = balance - totalExpense;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${currentIndex}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${currentIndex}`}
          aria-expanded="true"
          aria-controls={`collapse-${currentIndex}`}
        >
          <strong>{name} Details</strong>
        </button>
      </h2>
      <div
        id={`collapse-${currentIndex}`}
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="card bg-body-secondary">
          <div className="card-body">
            <p className="card-text">
              <strong>Total Balance :</strong>
              <RupeeSvg />
              {balance} <strong>Total Expense :</strong> <RupeeSvg />
              {totalExpense}
            </p>
            <p className="card-text">
              <strong>Remaining Balance :</strong>
              <RupeeSvg />
              {remainingBalance.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance;
