import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [{
    title: "Car Insurance",
    amount: 1250000,
    date: new Date(2022, 2, 31)
  },
  {
    title: "Buying Smart TV",
    amount: 8750000,
    date: new Date(2022, 2, 31)
  },
  {
    title: "Buyin A New House",
    amount: 2500000000,
    date: new Date(2022, 2, 31)
  },
  {
    title: "Holiday Expense",
    amount: 25000000,
    date: new Date(2022, 2, 31)
  },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
