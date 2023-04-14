import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "화장지",
    amount: 94000,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "TV", amount: 800000, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "자동차 보험",
    amount: 294000,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "책상",
    amount: 450000,
    date: new Date(2023, 5, 12),
  },
];

// Root Component
function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
