import React, { useState } from "react";
import Expenses from "./Component/Expenses/Expenses";
import NewExpense from "./Component/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 290,
    date: new Date(2023, 4, 4),
    location: "Super Mart",
  },
  {
    id: "e2",
    title: "TV",
    amount: 29000,
    date: new Date(2023, 7, 4),
    location: "Electronics Store",
  },
  {
    id: "e3",
    title: "Groceries",
    amount: 2900,
    date: new Date(2023, 8, 4),
    location: "Departmental Store",
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 2090,
    date: new Date(2023, 9, 4),
    location: "Showroom",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
