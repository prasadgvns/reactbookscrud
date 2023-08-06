import axios from "axios";
import { useState, useEffect } from "react";

import ExpenseFormHandler from "./components/ExpenseFormHandler";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotalCard";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [enableEdit, setEnableEdit] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState({});
  const [totalExpense, setTotalExpense] = useState(0);

  const fetchExpenses = async () => {
    const response = await axios.get("http://localhost:3001/expenses");
    setExpenses(response.data);
    const totalSum = calculateTotalExpense(response.data);
    setTotalExpense(totalSum);
  };

  const calculateTotalExpense = (expenses) => {
    let sum = 0;
    for (let expense of expenses) {
      sum += parseFloat(expense.amount);
    }
    return sum;
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // const createExpense = (expense) => {

  //   const updatedExpense = [...expenses, expense];

  //   setExpenses(updatedExpense);
  // };

  const createExpense = async (expense) => {
    const response = await axios.post("http://localhost:3001/expenses", {
      ...expense,
    });

    const updatedExpense = [...expenses, response.data];
    setExpenses(updatedExpense);
    const updatedTotalExpense = totalExpense + parseFloat(expense.amount);
    setTotalExpense(updatedTotalExpense);
  };

  // const deleteExpenseById = (id) => {
  //   const updatedExpense = expenses.filter((expense) => {
  //     return expense.id !== id;
  //   });

  //   setExpenses(updatedExpense);
  // };

  const deleteExpenseById = async (id) => {
    await axios.delete(`http://localhost:3001/expenses/${id}`);

    const updatedExpense = expenses.filter((expense) => {
      return expense.id !== id;
    });

    const deletedExpense = expenses.find((exp) => {
      return exp.id === id;
    });

    const updatedTotalExpense =
      totalExpense - parseFloat(deletedExpense.amount);

    setExpenses(updatedExpense);
    setTotalExpense(updatedTotalExpense);
  };

  const getExpenseById = (id) => {
    setEnableEdit(true);
    const expense = expenses.find((expense) => {
      return expense.id === id;
    });
    setExpenseToEdit({ ...expense });
  };

  // const editExpense = (expense) => {
  //   const updatedExpense = expenses.map((ex) => {
  //     if (expense.id === ex.id) {
  //       return { ...ex, ...expense };
  //     }
  //     return ex;
  //   });

  //   setExpenses(updatedExpense);
  // };

  const editExpense = async (expense) => {
    const id = expense.id;
    const response = await axios.put(`http://localhost:3001/expenses/${id}`, {
      ...expense,
    });

    const updatedExpense = expenses.map((ex) => {
      if (expense.id === ex.id) {
        return { ...ex, ...response.data };
      }
      return ex;
    });

    const totalSum = calculateTotalExpense(updatedExpense);
    setTotalExpense(totalSum);
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
      {expenses.length > 0 && <ExpenseTotal totalExpense={totalExpense} />}
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
