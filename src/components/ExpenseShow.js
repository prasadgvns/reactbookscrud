import { useContext } from "react";
import ExpenseContext from "../context/expense";
import { getColorByExpense } from "../utility/common";

function ExpenseShow({ expense }) {
  const { deleteExpenseById, getExpenseById, enableEdit } =
    useContext(ExpenseContext);
  const {
    id,
    expenseType,
    inputDate,
    description,
    amount,
    account,
    paymentMode,
  } = expense;

  let formattedDate = new Date(inputDate);

  const handleExpenseDelete = () => {
    deleteExpenseById(id);
  };

  const handleExpenseSelect = () => {
    getExpenseById(id);
  };

  let cardBodyColor = getColorByExpense(expenseType.toUpperCase());

  return (
    <div className="col">
      <div className="card border-1 mt-3 mb-1">
        <div className="card-header">
          {formattedDate.toDateString()}
          <span className="float-end mx-2" onClick={handleExpenseDelete}>
            <i className="bi bi-x-lg"></i>
          </span>
          {!enableEdit ? (
            <span className="float-end" onClick={handleExpenseSelect}>
              <i className="bi bi-pencil"></i>
            </span>
          ) : null}
        </div>
        <div
          className="card-body"
          style={{ backgroundColor: `${cardBodyColor}` }}
        >
          <h5 className="card-title">{expenseType}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{description}</h6>
          <p className="card-text">
            {amount} {account} {paymentMode}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExpenseShow;
