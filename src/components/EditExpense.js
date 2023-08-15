import { useState, useContext } from "react";
import ExpenseContext from "../context/expense";

import MandatoryIcon from "./MandatoryIcon";
import SelectBox from "./SelectBox";
import {
  expenseTypesArray,
  accountsArray,
  paymentModeArray,
} from "../utility/common";

function EditExpense() {
  const {
    expenseToEdit,
    editExpense,
    setEnableEdit,
    setIsError,
    setErrorMessage,
  } = useContext(ExpenseContext);

  const [expenseType, setExpenseType] = useState(expenseToEdit.expenseType);
  const [inputDate, setInputDate] = useState(expenseToEdit.inputDate);
  const [description, setDescription] = useState(expenseToEdit.description);
  const [amount, setAmount] = useState(expenseToEdit.amount);
  const [account, setAccount] = useState(expenseToEdit.account);
  const [paymentMode, setPaymentMode] = useState(expenseToEdit.paymentMode);

  const expenseTypeChangeHandler = (e) => {
    setIsError(false);
    setExpenseType(e.target.value);
  };

  const inputDateChangeHandler = (e) => {
    setIsError(false);
    setInputDate(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setIsError(false);
    setDescription(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setIsError(false);
    setAmount(e.target.value);
  };

  const accountChangeHandler = (e) => {
    setIsError(false);
    setAccount(e.target.value);
  };

  const paymentModeChangeHandler = (e) => {
    setIsError(false);
    setPaymentMode(e.target.value);
  };

  const createErrorMessage = () => {
    if (!expenseType || expenseType === "Choose...")
      return "ExpenseType Is Mandatory";
    if (!inputDate) return "Date Is Mandatory";
    if (!description) return "Description Is Mandatory";
    if (!amount) return "Amount Is Mandatory";
    if (!account || account === "Choose...") return "Account Is Mandatory";
    if (!paymentMode || paymentMode === "Choose...")
      return "Payment Mode Is Mandatory";
  };

  const submitEditExpenseHandler = (e) => {
    e.preventDefault();
    if (
      !expenseType ||
      expenseType === "Choose..." ||
      !inputDate ||
      !description ||
      !amount ||
      !account ||
      account === "Choose..." ||
      !paymentMode ||
      paymentMode === "Choose..."
    ) {
      setIsError(true);
      const errorMessage = createErrorMessage();
      setErrorMessage(errorMessage);
      return;
    }

    setIsError(false);
    const expense = {
      id: expenseToEdit.id,
      expenseType,
      inputDate,
      description,
      amount,
      account,
      paymentMode,
    };
    editExpense(expense);
    resetEveryField();
  };

  const resetEditExpenseHandler = (e) => {
    e.preventDefault();
    resetEveryField();
  };

  const resetEveryField = () => {
    setIsError(false);
    setExpenseType("");
    setInputDate("");
    setDescription("");
    setAmount("");
    setAccount("");
    setPaymentMode("");
    setEnableEdit(false);
  };

  return (
    <div className="border border-info border-3 rounded p-3 mt-3">
      <form
        className="row g-3"
        onSubmit={submitEditExpenseHandler}
        onReset={resetEditExpenseHandler}
      >
        <div className="pt-3">
          <h4>
            <i className="bi bi-pencil-square"></i> Edit Expense
          </h4>
        </div>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Expense Type
            <MandatoryIcon />
          </label>
          <SelectBox
            id="expenseType"
            value={expenseType}
            onChange={expenseTypeChangeHandler}
            options={expenseTypesArray}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputDate" className="form-label">
            Date
            <MandatoryIcon />
          </label>
          <input
            type="date"
            className="form-control"
            id="inputDate"
            value={inputDate}
            onChange={inputDateChangeHandler}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="description" className="form-label">
            Description
            <MandatoryIcon />
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={descriptionChangeHandler}
            required
            maxLength={30}
            minLength={10}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="amount" className="form-label">
            Amount
            <MandatoryIcon />
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="account" className="form-label">
            Account
            <MandatoryIcon />
          </label>
          <SelectBox
            id="account"
            value={account}
            onChange={accountChangeHandler}
            options={accountsArray}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="paymentMode" className="form-label">
            Payment Mode
            <MandatoryIcon />
          </label>
          <SelectBox
            id="paymentMode"
            value={paymentMode}
            onChange={paymentModeChangeHandler}
            options={paymentModeArray}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary m-1">
            Submit
          </button>
          <button type="reset" className="btn btn-secondary m-1">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditExpense;
