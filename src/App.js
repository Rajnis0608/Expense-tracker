import Expenses from "./components/Expenses";
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

  return (
      <Expenses expenses = {items}/>
  );
}

export default App;
