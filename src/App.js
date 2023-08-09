import { useContext, useEffect } from "react";

import ExpenseFormHandler from "./components/ExpenseFormHandler";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotalCard";
import Header from "./components/Header";

import ExpenseContext from "./context/expense";

function App() {
  const { expenses, stableFetchExpenses } = useContext(ExpenseContext);

  useEffect(() => {
    stableFetchExpenses();
  }, [stableFetchExpenses]);

  return (
    <>
      <Header />
      <div className="container">
        <ExpenseFormHandler />
        {expenses.length > 0 && <ExpenseTotal />}
        <ExpenseList />
      </div>
    </>
  );
}

export default App;
