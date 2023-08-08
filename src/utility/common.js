const getColorByTitle = (title) => {
  if (title === "DAILY EXPENSE") {
    return "#EAECEE";
  }
  if (title === "MONTHLY EXPENSE") {
    return "#F9EBEA";
  }
  if (title === "SHOPPING EXPENSE") {
    return "#D6EAF8";
  }
  if (title === "OTHERS EXPENSE") {
    return "#E8DAEF";
  }
  if (title === "FOOD OR TRAVEL EXPENSE") {
    return "#FEF9E7";
  }
  if (title === "HEALTH AND MEDICAL EXPENSE") {
    return "#F8F9F9";
  }
  if (title === "ESSENTIAL EXPENSE") {
    return "#FBEEE6";
  }
  if (title === "TOTAL EXPENSE") return "#E5E7E9";
  return "#BFC9CA";
};

export { getColorByTitle };
