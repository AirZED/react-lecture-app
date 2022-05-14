import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  //in other to make the yearChoosen a state, we would initialize it here
  const handleExpense = (yearChoosen) => {
    setFilteredYear(yearChoosen);
    console.log(yearChoosen);
  };

  //Filter the years according to the yeat choosen

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;

    //This is done this way and not and updated STATE because we
    //donot want to lose the filtered out values.
  });

  //so in the case above, previewContent is initialized to be the jsx p tag, but when a condition is satisfied that value is reassigned, for spread of logic

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onAddExpenseFilter={handleExpense}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
