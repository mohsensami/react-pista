import React, { useState } from 'react';

import './expenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onSaveExpenseData(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        value={enteredTitle} 
                        type="text" 
                        onChange={titleChangeHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        onChange={amountChangeHandler}
                        value={enteredAmount} 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        value={enteredDate}
                        onChange={dateChangeHandler} 
                        type="date" 
                        min="2019-01-01" 
                        max="2022-12-31" 
                    />
                </div>
            </div>
            <div className="new_expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;