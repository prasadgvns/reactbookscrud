import ExpenseShow from "./ExpenseShow";

function ExpenseList({ expenses, onDelete, onSelect, enableEdit }) {
  const renderExpense = expenses.map((expense) => {
    return (
      <ExpenseShow
        expense={expense}
        onDelete={onDelete}
        onSelect={onSelect}
        key={expense.id}
        enableEdit={enableEdit}
      />
    );
  });
  return <div className="row row-cols-4">{renderExpense}</div>;
}

export default ExpenseList;
