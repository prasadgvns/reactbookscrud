import ExpenseSumComponent from "./ExpneseSumComponent";

function ExpenseTotal({ expenseTypes }) {
  const renderExpenseSumComponents = Object.keys(expenseTypes).map((key) => {
    return (
      <ExpenseSumComponent
        key={key}
        expenseTitle={key}
        expenseAmount={expenseTypes[key]}
      />
    );
  });
  return (
    <div className="card mt-3 text-dark bg-light border-success">
      <div className="card-header">Expense Summary</div>
      <ul className="list-group list-group-flush">
        {renderExpenseSumComponents}
      </ul>
    </div>
  );
}

export default ExpenseTotal;
