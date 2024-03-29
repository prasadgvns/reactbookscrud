import { createContext, useState, useCallback } from "react";
import axios from "axios";

const ExpenseContext = createContext();

function Provider({ children }) {
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

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchExpenses = async () => {
    const response = await axios.get("http://localhost:3002/expenses");
    const updateExpenseTypes = getAllExpenseTypes(response.data);
    setExpenses(response.data);
    setExpenseTypes(updateExpenseTypes);
  };

  const stableFetchExpenses = useCallback(fetchExpenses, []);

  const createExpense = async (expense) => {
    const response = await axios.post("http://localhost:3002/expenses", {
      ...expense,
    });

    const updatedExpense = [...expenses, response.data];
    const updateExpenseTypes = getAllExpenseTypes(updatedExpense);
    setExpenses(updatedExpense);
    setExpenseTypes(updateExpenseTypes);
  };

  const deleteExpenseById = async (id) => {
    await axios.delete(`http://localhost:3002/expenses/${id}`);

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

  const editExpense = async (expense) => {
    const id = expense.id;
    const response = await axios.put(`http://localhost:3002/expenses/${id}`, {
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
      if (expense.expenseType === "MONTHLY EXPENSE") {
        monthlyExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "DAILY EXPENSE") {
        dailyExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "FOOD OR TRAVEL") {
        foodOrTravelExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "ESSENTIAL EXPENSE") {
        essentialExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "SHOPPING") {
        shoppingExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "INVESTMENT") {
        investmentExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "HEALTH AND MEDICAL") {
        healthAndMedicalExpense += parseFloat(expense.amount);
      } else if (expense.expenseType === "OTHERS") {
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

  const getExpensedAmount = (accountName) => {
    let totalExpense = 0;

    for (let expense of expenses) {
      if (expense.account === accountName) {
        totalExpense += parseFloat(expense.amount);
      }
    }
    return totalExpense.toFixed(2);
  };

  const filterExpense = async (expenseType) => {
    const response = await axios.get("http://localhost:3002/expenses");
    let tempExpenses = [];
    if (expenseType === "Choose...") {
      setExpenses(response.data);
    } else {
      tempExpenses = response.data.filter((ex) => {
        return ex.expenseType === expenseType;
      });
      setExpenses(tempExpenses);
    }
  };

  const valueToShare = {
    createExpense,
    fetchExpenses,
    stableFetchExpenses,
    enableEdit,
    setEnableEdit,
    expenseToEdit,
    editExpense,
    expenseTypes,
    expenses,
    deleteExpenseById,
    getExpenseById,
    accounts: [
      { name: "HDFC", balance: 293420.45 },
      { name: "ICICI", balance: 226167.82 },
      { name: "SBI", balance: 6419.52 },
      { name: "BOB", balance: 17107.79 },
      { name: "CASH", balance: 5680 },
    ],
    getExpensedAmount,
    isError,
    setIsError,
    errorMessage,
    setErrorMessage,
    filterExpense,
  };

  return (
    <ExpenseContext.Provider value={valueToShare}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
export { Provider };
