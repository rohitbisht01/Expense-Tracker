import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Book a Movie ticket",
    amount: "78.36",
    date: new Date(2022, 1, 14),
  },
  {
    id: "e2",
    title: "Health Insurance",
    amount: "45.23",
    date: new Date(2022, 2, 23),
  },
  {
    id: "e3",
    title: "Buy a Toaster",
    amount: "18.36",
    date: new Date(2022, 1, 14),
  },
  {
    id: "e4",
    title: "Gym Membership",
    amount: "445.23",
    date: new Date(2022, 2, 27),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
