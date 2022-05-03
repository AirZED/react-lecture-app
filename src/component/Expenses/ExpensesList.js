import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let previewContent = (
    <p className="expenses-list__fallback">No expenses found</p>
  );

  if (props.items.length > 0) {
    previewContent = props.items.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        //ALWAYS ADD THE KEY PROPERTY TO YOUR LIST, THIS WOULD SUGGEST A DIFFERENCE IN THE LIST FILE TO THE BROWSER.
        //WE COULD USE ANYTHING TO ASSIGN THIS KEY, But in this case, we used math random to generate this key and destructured an earlier array and added it there
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ));
  }

  return <ul className="expenses-list">{previewContent}</ul>;
};

export default ExpensesList;
