import "./ExpenseForm.css";
import { useState } from "react";
import React from "react";

const ExpenseForm = (props) => {
  const [titleEntered, setTitleEntered] = useState("");
  const [amountEntered, setAmountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");
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
      title: titleEntered,
      amount: +amountEntered,
      date: new Date(dateEntered),
    };

    props.onSaveExpenseData(expenseData);
    //this fucntions below are used to change the state of the input fields after submission
    setTitleEntered("");
    setAmountEntered("");
    setDateEntered("");
    props.stopEdit(false);
    //the stopEdit function is a prop that holds a function that holds another funtion which sets the state
  };


  return (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={titleEntered}
                //HERE THE TWO WAY BINDING HAS BEEN ACTIVATED,THE INPUT IS NOT ONLY LISTENED TO FOR ACTIONS, BUT THE
                //STATE IS FEED BACK TO THE INPUT

                //Hence, the value are resetted to empty strings, so that after the state change activation, the state reassigned fills in for the state and change the input to empty string
                onChange={changeTitleHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={amountEntered}
                onChange={changeAmountHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={dateEntered}
                onChange={changePaymentDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={props.stopEdit}>Cancel</button>
            <button type="submit">
              Add Expense
            </button>
          </div>
        </form>
  );
};

export default ExpenseForm;

//addition of two-way binding: In this case the input is not only collected, but the state of the input are also changed
