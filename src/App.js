import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {

  const items = [
    {
      id:'e1',
      title:'Toilet Paper',
      amount: 100, 
      Date: new Date(2020,7,14)
    },
    {
      id:'e2',
      title:'New LED', 
      amount: 7000, 
      Date: new Date(2021,2,12)
    },
    {
      id:'e3',
      title:'Car Insurance', 
      amount: 2000, 
      Date: new Date(2021,2,28)
    },
    {
      id:'e4',
      title:'New Desk(Wooden)', 
      amount: 1000, 
      Date: new Date(2021,5,12)
    }
  ];

  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses expenses = {items}/>
    </div>
  );
}

export default App;
