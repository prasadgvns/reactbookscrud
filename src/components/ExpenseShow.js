function ExpenseShow({ expense, onDelete, onSelect, enableEdit }) {
  const { id, title, inputDate, description, amount, account, paymentMode } =
    expense;

  let formattedDate = new Date(inputDate);

  const handleExpenseDelete = () => {
    onDelete(id);
  };

  const handleExpenseSelect = () => {
    onSelect(id);
  };

  let cardBodyColor;

  if (account === "SBI") {
    cardBodyColor = "#fdf5e6";
  } else if (account === "BOB") {
    cardBodyColor = "#aaf0d1";
  } else if (account === "ICICI") {
    cardBodyColor = "#add8e6";
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
          <h5 className="card-title">{title}</h5>
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
