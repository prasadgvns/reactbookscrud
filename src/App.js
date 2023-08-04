import { useState } from "react";

import ExpenseFormHandler from "./components/ExpenseFormHandler";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [enableEdit, setEnableEdit] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState({});

  const createExpense = (expense) => {
    const updatedExpense = [...expenses, expense];

    setExpenses(updatedExpense);
  };

  const deleteExpenseById = (id) => {
    const updatedExpense = expenses.filter((expense) => {
      return expense.id !== id;
    });

    setExpenses(updatedExpense);
  };

  const getExpenseById = (id) => {
    setEnableEdit(true);
    const expense = expenses.find((expense) => {
      return expense.id === id;
    });
    setExpenseToEdit({ ...expense });
  };

  const editExpense = (expense) => {
    const updatedExpense = expenses.map((ex) => {
      if (expense.id === ex.id) {
        return { ...ex, ...expense };
      }
      return ex;
    });

    setExpenses(updatedExpense);
  };

  return (
    <div className="container">
      <ExpenseFormHandler
        onCreate={createExpense}
        enableEdit={enableEdit}
        setEnableEdit={setEnableEdit}
        expenseToEdit={expenseToEdit}
        editExpense={editExpense}
      />
      <ExpenseList
        expenses={expenses}
        enableEdit={enableEdit}
        onDelete={deleteExpenseById}
        onSelect={getExpenseById}
      />
    </div>
  );
}

export default App;
