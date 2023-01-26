import React from 'react';

import './newExpense.css';
import ExpenseForm from '../ExpenseForm/expenseForm';

const NewExpense = () => {
    return (
        <div className='new-expense'>
            <ExpenseForm />
        </div>
    )
};

export default NewExpense;