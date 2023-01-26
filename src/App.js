import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/newExpense";

function App() {
    return (
        <>
            <NewExpense />
            <Expenses />
        </>
    );
}

export default App;
