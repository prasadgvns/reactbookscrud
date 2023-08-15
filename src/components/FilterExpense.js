import { useState, useContext } from "react";
import SelectBox from "./SelectBox";

import { expenseTypesArray } from "../utility/common";

import ExpenseContext from "../context/expense";

function FilterExpense() {
  const [expenseType, setExpenseType] = useState("");

  const { filterExpense } = useContext(ExpenseContext);

  const expenseTypeChangeHandler = (e) => {
    setExpenseType(e.target.value);
    filterExpense(e.target.value);
  };

  return (
    <div
      className="row alert mx-auto mt-3 border border-warning"
      style={{ backgroundColor: "#FAF0BE" }}
    >
      <div className="col">
        <p>
          <strong>Select to filter:</strong>
        </p>
      </div>
      <div className="col">
        <SelectBox
          id="expenseType1"
          value={expenseType}
          onChange={expenseTypeChangeHandler}
          options={expenseTypesArray}
        />
      </div>
    </div>
  );
}

export default FilterExpense;
