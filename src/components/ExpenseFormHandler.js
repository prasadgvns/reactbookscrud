import CreateExpense from "./CreateExpense";
import EditExpense from "./EditExpense";

function ExpenseFormHandler({
  onCreate,
  enableEdit,
  setEnableEdit,
  expenseToEdit,
  editExpense,
}) {
  if (enableEdit && expenseToEdit)
    return (
      <EditExpense
        enableEdit={enableEdit}
        setEnableEdit={setEnableEdit}
        expenseToEdit={expenseToEdit}
        editExpense={editExpense}
      />
    );
  return <CreateExpense onCreate={onCreate} />;
}

export default ExpenseFormHandler;
