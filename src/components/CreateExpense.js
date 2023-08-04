import { useState } from "react";

function CreateExpense({ onCreate }) {
  const [title, setTitle] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");
  const [paymentMode, setPaymentMode] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const inputDateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const accountChangeHandler = (e) => {
    setAccount(e.target.value);
  };

  const paymentModeChangeHandler = (e) => {
    setPaymentMode(e.target.value);
  };

  const submitCreateExpenseHandler = (e) => {
    e.preventDefault();
    if (!account) {
      alert("Select account");
      return;
    }

    if (!paymentMode) {
      alert("Select payment mode");
      return;
    }

    const expense = {
      id: Math.round(Math.random() * 9999),
      title,
      inputDate,
      description,
      amount,
      account,
      paymentMode,
    };
    console.log(expense);
    onCreate(expense);
    resetEveryField();
  };

  const resetCreateExpenseHandler = (e) => {
    e.preventDefault();
    resetEveryField();
  };

  const resetEveryField = () => {
    setTitle("");
    setInputDate("");
    setDescription("");
    setAmount("");
    setAccount("");
    setPaymentMode("");
  };

  return (
    <div className="border border-info border-3 rounded p-3 mt-3">
      <form
        className="row g-3"
        onSubmit={submitCreateExpenseHandler}
        onReset={resetCreateExpenseHandler}
      >
        <div className="pt-3">
          <h4>Add Expense</h4>
        </div>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputDate" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="inputDate"
            value={inputDate}
            onChange={inputDateChangeHandler}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={descriptionChangeHandler}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="amount" className="form-label">
            Amount
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
        <div className="col-md-4">
          <label htmlFor="account" className="form-label">
            Account
          </label>
          <select
            id="account"
            className="form-select"
            value={account}
            onChange={accountChangeHandler}
            required
          >
            <option defaultValue>Choose...</option>
            <option>HDFC</option>
            <option>ICICI</option>
            <option>SBI</option>
            <option>BOB</option>
            <option>CASH</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="paymentMode" className="form-label">
            Payment Mode
          </label>
          <select
            id="paymentMode"
            className="form-select"
            value={paymentMode}
            onChange={paymentModeChangeHandler}
            required
          >
            <option defaultValue>Choose...</option>
            <option>PAYTM</option>
            <option>PHONEPE</option>
            <option>DEBIT CARD</option>
            <option>CASH</option>
            <option>ONLINE</option>
          </select>
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

export default CreateExpense;