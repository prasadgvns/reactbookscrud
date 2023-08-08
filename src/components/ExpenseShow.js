function ExpenseShow({ expense, onDelete, onSelect, enableEdit }) {
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
    onDelete(id);
  };

  const handleExpenseSelect = () => {
    onSelect(id);
  };

  let cardBodyColor;

  if (expenseType === "Daily Expense") {
    cardBodyColor = "#EAECEE";
  } else if (expenseType === "Monthly Expense") {
    cardBodyColor = "#F9EBEA";
  } else if (expenseType === "Food or Travel") {
    cardBodyColor = "#FEF9E7";
  } else if (expenseType === "Essential Expense") {
    cardBodyColor = "#FBEEE6";
  } else if (expenseType === "Shopping") {
    cardBodyColor = "#D6EAF8";
  } else if (expenseType === "Health And Medical") {
    cardBodyColor = "#FEF9E7";
  } else if (expenseType === "Others") {
    cardBodyColor = "#E8DAEF";
  } else {
    cardBodyColor = "#FEF9E7";
  }

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
