import React, { useState } from 'react';
//in order to use a react hook like useState, it has to be imported from the react library
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

 
  const[title, setTitle]= useState(props.title);

  //STATES add reactivity to our pages
  //this is a react hook that should always be called in the primary function
  // the useState hook returns an array of 2 elements, hence array destructuring is used to destroy the array and the elements are
  // extracted in the bracket; [title - stands for the elements which state would be changed; setTitle- stands for the function which is incharge of changing this state.]

  const clickHandler = () => {
    setTitle('Updated')
    //the function is now called here in the click handler function and the new state are assigned as arguments or parameters.
    //it can otherwise be called the state updating function hance the assigment with the const.
  }
  return (
    
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
