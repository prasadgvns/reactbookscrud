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

const expenseTypesArray = [
  { id: 1, value: "MONTHLY EXPENSE", label: "MONTHLY EXPENSE" },
  { id: 2, value: "DAILY EXPENSE", label: "DAILY EXPENSE" },
  { id: 3, value: "FOOD OR TRAVEL", label: "FOOD OR TRAVEL" },
  { id: 4, value: "ESSENTIAL EXPENSE", label: "ESSENTIAL EXPENSE" },
  { id: 5, value: "SHOPPING", label: "SHOPPING" },
  { id: 6, value: "INVESTMENT", label: "INVESTMENT" },
  { id: 7, value: "HEALTH AND MEDICAL", label: "HEALTH AND MEDICAL" },
  { id: 8, value: "OTHERS", label: "OTHERS" },
];

const accountsArray = [
  { id: 1, value: "HDFC", label: "HDFC" },
  { id: 2, value: "ICICI", label: "ICICI" },
  { id: 3, value: "SBI", label: "SBI" },
  { id: 4, value: "BOB", label: "BOB" },
  { id: 5, value: "CASH", label: "CASH" },
];

const paymentModeArray = [
  { id: 1, value: "PAYTM", label: "PAYTM" },
  { id: 2, value: "PHONEPE", label: "PHONEPE" },
  { id: 3, value: "DEBIT CARD", label: "DEBIT CARD" },
  { id: 4, value: "CASH", label: "CASH" },
  { id: 5, value: "NET BANKING", label: "NET BANKING" },
];

export {
  getColorByExpense,
  expenseTypesArray,
  accountsArray,
  paymentModeArray,
};
