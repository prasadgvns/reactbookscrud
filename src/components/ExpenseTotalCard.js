import { useContext } from "react";

import ExpenseSumComponent from "./ExpneseSumComponent";

import ExpenseContext from "../context/expense";

function ExpenseTotal() {
  const { expenseTypes } = useContext(ExpenseContext);
  const renderExpenseSumComponents = Object.keys(expenseTypes).map((key) => {
    return (
      <ExpenseSumComponent
        key={key}
        expenseTitle={key}
        expenseAmount={expenseTypes[key]}
      />
    );
  });
  return (
    <div className="card mt-3 text-dark bg-light border-success">
      <div className="card-header">Expense Summary</div>
      <ul className="list-group list-group-flush">
        {renderExpenseSumComponents}
      </ul>
    </div>
  );
}

export default ExpenseTotal;
