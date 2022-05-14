import { useState } from "react";

import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import React from "react";

const NewExpense = (props) => {

    const [editing, setEditing] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        
        props.onAddExpense(expenseData);
    }
     const onAddNewExpense = () => {
       setEditing(true)
    };
     const onCancelNewExpense = () => {
       setEditing(false)
     };

    return (
      <div className="new-expense">
        {!editing && <button onClick={onAddNewExpense}>Add New Expense</button>}
        {editing && (
          <ExpenseForm
            onSaveExpenseData={onSaveExpenseDataHandler}
            stopEdit={onCancelNewExpense}
          />
        )}
      </div>
    );
   
}


export default NewExpense;