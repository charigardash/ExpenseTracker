import Expenses from "./components/Expenses/Expenses";

const App = () => {
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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
