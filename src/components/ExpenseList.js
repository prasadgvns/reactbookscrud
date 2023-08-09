import { useContext } from "react";

import ExpenseShow from "./ExpenseShow";

import ExpenseContext from "../context/expense";

function ExpenseList() {
  const { expenses } = useContext(ExpenseContext);

  const renderExpense = expenses
    .sort((e1, e2) => {
      let da1 = new Date(e1.inputDate);
      let da2 = new Date(e2.inputDate);
      return da2 - da1 || e2.amount - e1.amount;
    })
    .map((expense) => {
      return <ExpenseShow expense={expense} key={expense.id} />;
    });
  return <div className="row row-cols-4">{renderExpense}</div>;
}

export default ExpenseList;
