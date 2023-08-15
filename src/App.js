import { useContext, useEffect } from "react";
import BalanceList from "./components/BalanceList";

import ExpenseFormHandler from "./components/ExpenseFormHandler";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotalCard";
import FilterExpense from "./components/FilterExpense";
import Header from "./components/Header";
import Error from "./components/Error";

import ExpenseContext from "./context/expense";

function App() {
  const { expenses, stableFetchExpenses, accounts, isError, errorMessage } =
    useContext(ExpenseContext);

  useEffect(() => {
    stableFetchExpenses();
  }, [stableFetchExpenses]);

  return (
    <>
      <Header />
      {isError && <Error message={errorMessage} />}
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
        <FilterExpense />
        <ExpenseList />
      </div>
    </>
  );
}

export default App;
