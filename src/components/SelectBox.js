const SelectBox = ({ id, value, onChange, options }) => {
  const renderedOption = options.map((opt) => {
    return (
      <option value={opt.value} key={opt.id}>
        {opt.label}
      </option>
    );
  });

  return (
    <select
      id={id} // account
      className="form-select"
      value={value} // expenseType
      onChange={onChange} // expenseTypeChangeHandler
    >
      <option defaultValue>Choose...</option>
      {/* <option>Monthly Expense</option>
      <option>Daily Expense</option>
      <option>Food Or Travel</option>
      <option>Essential Expense</option>
      <option>Shopping</option>
      <option>Investment</option>
      <option>Health And Medical</option>
      <option>Others</option> */}
      {renderedOption}
    </select>
  );
};

export default SelectBox;
