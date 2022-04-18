import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "78.36",
      date: new Date(2022, 1, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: "45.23",
      date: new Date(2022, 2, 23),
    },
    {
      id: "e3",
      title: "Paper",
      amount: "18.36",
      date: new Date(2022, 1, 14),
    },
    {
      id: "e4",
      title: "Home Insurance",
      amount: "445.23",
      date: new Date(2022, 2, 27),
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
