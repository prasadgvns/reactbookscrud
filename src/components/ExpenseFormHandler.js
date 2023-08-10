import { useContext } from "react";

import CreateExpense from "./CreateExpense";
import EditExpense from "./EditExpense";

import ExpenseContext from "../context/expense";

function ExpenseFormHandler() {
  const { enableEdit, expenseToEdit } = useContext(ExpenseContext);
  if (enableEdit && expenseToEdit) return <EditExpense />;
  return <CreateExpense />;
}

export default ExpenseFormHandler;
