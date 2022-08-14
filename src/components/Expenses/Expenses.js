import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem.js";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {

    setFilteredYear(selectedYear);

  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onTahunDipilih={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
