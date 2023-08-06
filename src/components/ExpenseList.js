import ExpenseShow from "./ExpenseShow";

function ExpenseList({ expenses, onDelete, onSelect, enableEdit }) {
  const renderExpense = expenses
    .sort((e1, e2) => {
      let da1 = new Date(e1.inputDate);
      let da2 = new Date(e2.inputDate);
      return da2 - da1;
    })
    .map((expense) => {
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
