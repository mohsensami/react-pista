import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/newExpense";

function App() {
    const expenses = [
        {
            id: "el",
            title: "Toile Paper",
            amount: 94.12,
            date: new Date(2020, 4, 26),
        },
        {
            id: "e2",
            title: "Car Insurance",
            amount: 111.12,
            date: new Date(2021, 8, 14),
        },
        {
            id: "e3",
            title: "House Rent",
            amount: 994.12,
            date: new Date(2021, 1, 22),
        },
        {
            id: "e4",
            title: "New Desk",
            amount: 454.12,
            date: new Date(2022, 5, 19),
        },
    ];
    const addExpenseDataHandler = (expense) => {
        console.log(expense);
    };
    return (
        <>
            <NewExpense onAddExpense={addExpenseDataHandler} />
            <Expenses expenses={expenses} />
        </>
    );
}

export default App;
