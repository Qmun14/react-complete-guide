import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  const expense = [{
    title: "Car Insurance",
    amount: 1250000,
    date: new Date(2022, 0, 31)
  },
  {
    title: "Buying Smart TV",
    amount: 8750000,
    date: new Date(2022, 2, 12)
  },
  {
    title: "Buyin A New House",
    amount: 2500000000,
    date: new Date(2021, 3, 9)
  },
  {
    title: "Holiday Expense",
    amount: 25000000,
    date: new Date(2022, 10, 20)
  },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
