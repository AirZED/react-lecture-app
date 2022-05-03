import { useState } from "react";
import Expenses from "./component/Expenses/Expenses"
import NewExpense from "./component/Expenses/newEX/NewExpense"

//IN other to add more expenses to the form, we would use state because even though we passs it into the array, react wont render it

 const DummyExpenses = [
   {
     id: "e1",
     title: "Toilet Paper",
     amount: 94.12,
     date: new Date(2020, 7, 14),
   },
   {
     id: "e2",
     title: "New TV",
     amount: 799.49,
     date: new Date(2021, 2, 12),
   },
   {
     id: "e3",
     title: "Car Insurance",
     amount: 294.67,
     date: new Date(2021, 2, 28),
   },
   {
     id: "e4",
     title: "New Desk (Wooden)",
     amount: 450,
     date: new Date(2021, 5, 12),
   },
 ];

function App() {

 const [expenses, setExpenses]= useState(DummyExpenses)

  const addExpenseHandler = expense => {
    // setExpenses([expense, ...expenses]);
    //The above would work but is not really a best practice.

    // hence we do it as below
    setExpenses((previousExpense) => {
      return [expense, ...previousExpense]
     
    });

    

    
    //In the above case, the expense object receives the object as a parameter and and then uses the spread method to 
    //add it to the array of objects from the previous state.

    //BUT

    //In the second case, a function is passed into the stateUpdating function which takes the snapshot of the previous state,
    //which in this case is an array.
  }

  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
