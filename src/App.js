import { useContext, useEffect } from "react";
import BalanceList from "./components/BalanceList";

import ExpenseFormHandler from "./components/ExpenseFormHandler";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotalCard";
import Header from "./components/Header";

import ExpenseContext from "./context/expense";

function App() {
  const { expenses, stableFetchExpenses, accounts } =
    useContext(ExpenseContext);

  useEffect(() => {
    stableFetchExpenses();
  }, [stableFetchExpenses]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <ExpenseFormHandler />
          </div>
          <div className="col">
            <BalanceList accounts={accounts} />
          </div>
        </div>
        {expenses.length > 0 && <ExpenseTotal />}
        <ExpenseList />
      </div>
    </>
  );
}

export default App;
