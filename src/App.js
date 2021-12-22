import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const Dummy = [
  {
    id:'e1',
    title:'Toilet Paper',
    amount: 100, 
    date: new Date(2020,7,14)
  },
  {
    id:'e2',
    title:'New LED', 
    amount: 7000, 
    date: new Date(2021,2,12)
  },
  {
    id:'e3',
    title:'Car Insurance', 
    amount: 2000, 
    date: new Date(2021,2,28)
  },
  {
    id:'e4',
    title:'New Desk(Wooden)', 
    amount: 1000, 
    date: new Date(2021,5,12)
  }
];

const App = () => {
 
  const [expenses,setExpenses] = useState(Dummy);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses items = {expenses}/>
    </div>
  ); 
}

export default App;
