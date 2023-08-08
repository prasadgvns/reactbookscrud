import axios from "axios";
import { useState, useEffect } from "react";

import ExpenseFormHandler from "./components/ExpenseFormHandler";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotalCard";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [enableEdit, setEnableEdit] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState({});
  const [expenseTypes, setExpenseTypes] = useState({
    monthlyExpense: 0,
    dailyExpense: 0,
    foodOrTravelExpense: 0,
    essentialExpense: 0,
    shoppingExpense: 0,
    investmentExpense: 0,
    healthAndMedicalExpense: 0,
    othersExpense: 0,
    totalExpense: 0,
  });

  const getAllExpenseTypes = (expenses) => {
    let monthlyExpense = 0;
    let dailyExpense = 0;
    let foodOrTravelExpense = 0;
    let essentialExpense = 0;
    let shoppingExpense = 0;
    let investmentExpense = 0;
    let healthAndMedicalExpense = 0;
    let othersExpense = 0;
    let totalExpense = 0;

    for (let expense of expenses) {
      if (expense.expenseType === "Monthly Expense") {
        monthlyExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "Daily Expense") {
        dailyExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "Food Or Travel") {
        foodOrTravelExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "Essential Expense") {
        essentialExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "Shopping") {
        shoppingExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "Investment") {
        investmentExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "Health And Medical") {
        healthAndMedicalExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "Others") {
        othersExpense += parseFloat(expense.amount);
      }
    }

    totalExpense =
      monthlyExpense +
      dailyExpense +
      foodOrTravelExpense +
      essentialExpense +
      shoppingExpense +
      investmentExpense +
      healthAndMedicalExpense +
      othersExpense;

    return {
      monthlyExpense,
      dailyExpense,
      foodOrTravelExpense,
      essentialExpense,
      shoppingExpense,
      investmentExpense,
      healthAndMedicalExpense,
      othersExpense,
      totalExpense,
    };
  };

  const fetchExpenses = async () => {
    const response = await axios.get("http://localhost:3001/expenses");
    const updateExpenseTypes = getAllExpenseTypes(response.data);
    setExpenses(response.data);
    setExpenseTypes(updateExpenseTypes);
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
    const updateExpenseTypes = getAllExpenseTypes(updatedExpense);
    setExpenses(updatedExpense);
    setExpenseTypes(updateExpenseTypes);
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

    const updateExpenseTypes = getAllExpenseTypes(updatedExpense);

    setExpenses(updatedExpense);

    setExpenseTypes(updateExpenseTypes);
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

    const updateExpenseTypes = getAllExpenseTypes(updatedExpense);

    setExpenses(updatedExpense);

    setExpenseTypes(updateExpenseTypes);
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

      {expenses.length > 0 && <ExpenseTotal expenseTypes={expenseTypes} />}

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
