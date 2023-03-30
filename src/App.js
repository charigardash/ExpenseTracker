import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "102",
      date: new Date(2023, 2, 30),
    },
    {
      id: "e2",
      title: "TV",
      amount: "80200",
      date: new Date(2023, 1, 11),
    },

    {
      id: "e3",
      title: "Camera",
      amount: "36000",
      date: new Date(2022, 4, 21),
    },

    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: "4500",
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
