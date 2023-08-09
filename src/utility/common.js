const getColorByExpense = (title) => {
  if (title.includes("MONTHLY")) {
    return "#e6fff5";
  }
  if (title.includes("DAILY")) {
    return "#ffffe6";
  }
  if (title.includes("FOOD")) {
    return "#e6faff";
  }
  if (title.includes("ESSENTIAL")) {
    return "#ffeecc";
  }
  if (title.includes("SHOPPING")) {
    return "#ffe6ff";
  }
  if (title.includes("HEALTH")) {
    return "#fff5e6";
  }
  if (title.includes("OTHERS")) {
    return "#f2e6d9";
  }

  if (title.includes("TOTAL")) return "#ffd6cc";
};

export { getColorByExpense };
