import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [titleEntered, setTitleEntered] = useState("")
  const [amountEntered, setAmountEntered] = useState("")
  const [dateEntered, setDateEntered] = useState("")
  //the three states above works simultaneously and triggers on call
  //Note, once the value of an input is read, it stores this value as a string

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '';
  //   enteredAmount: '',
  //   enteredDate: ''

  //   this is an amount of defined object create and would be destroyed and call when necessary
  // })
  const changeTitleHandler = (e) => {
    setTitleEntered(e.target.value);
    //for the method commented above

    // setUserInput((object snapshot of previous state - name: previousState) => {
    //   return( ...previousState, enteredTitle: event.target.value)
    // })

  };

  const changeAmountHandler = (e) => {
    setAmountEntered(e.target.value);

    // setUserInput((object snapshot of previous state - name: previousState) => {
    //   return( ...previousState, enteredAmount event.target.value)
    // })
  };

  const changePaymentDate = (e) => {
    setDateEntered(e.target.value);

    // setUserInput((object snapshot of previous state - name: previousState) => {
    //   return( ...previousState, enteredDate: event.target.value)
    // })
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title:  titleEntered,
      amount: amountEntered,
      date: new Date (dateEntered),
    }

    console.log(expenseData);

  }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={changePaymentDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
