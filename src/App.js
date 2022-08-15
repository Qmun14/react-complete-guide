import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_INIT_EXPENSES = [{
  id: 'a1',
  title: "Car Insurance",
  amount: 1250000,
  date: new Date(2022, 0, 31)
},
{ 
  id: 'a2',
  title: "Buying Smart TV",
  amount: 8750000,
  date: new Date(2021, 2, 12)
},
{ 
  id: 'a3',
  title: "Buyin A New House",
  amount: 2500000000,
  date: new Date(2021, 3, 9)
},
{ 
  id: 'a4',
  title: "Holiday Expense",
  amount: 25000000,
  date: new Date(2022, 10, 20)
},
{ 
  id: 'a5',
  title: "A Book",
  amount: 154000,
  date: new Date(2019, 10, 20)
},
{ 
  id: 'a6',
  title: "Holiday Expense",
  amount: 25000000,
  date: new Date(2019, 10, 20)
},
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_INIT_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
