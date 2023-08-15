import RupeeSvg from "../svg/rupee";
import { getColorByExpense } from "../utility/common";

function ExpenseSumComponent({ expenseTitle, expenseAmount }) {
  const getUpdatedTitle = (title) => {
    if (title.includes("Expense")) {
      title = title.replace("Expense", " Expense");
    }
    if (title.includes("Or")) {
      title = title.replace("Or", " Or ");
    }
    if (title.includes("And")) {
      title = title.replace("And", " And ");
    }
    return title.toUpperCase();
  };

  let newTitle = getUpdatedTitle(expenseTitle);
  let rowColor = getColorByExpense(newTitle);

  if (expenseAmount === 0) return null;

  return (
    <li className="list-group-item" style={{ backgroundColor: `${rowColor}` }}>
      {newTitle}

      <div style={{ float: "right" }}>
        <span>
          <RupeeSvg />
        </span>
        {expenseAmount.toFixed(2)}
      </div>
    </li>
  );
}

export default ExpenseSumComponent;
