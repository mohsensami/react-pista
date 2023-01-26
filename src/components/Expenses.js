import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './card';

import './Expenses.css';

const Expenses = () => {
    const expenses = [
        {
          id: 'el',
          title: 'Toile Paper',
          amount: 94.12,
          date: new Date(2020, 4, 26),
        },
        {
          id: 'e2',
          title: 'Car Insurance',
          amount: 111.12,
          date: new Date(2021, 8, 14),
        },
        {
          id: 'e3',
          title: 'House Rent',
          amount: 994.12,
          date: new Date(2021, 1, 22),
        },
        {
          id: 'e4',
          title: 'New Desk',
          amount: 454.12,
          date: new Date(2022, 5, 19),
        }
      ]
    return(
        <Card className='expenses'>
            <ExpenseItem 
                title={expenses[0].title}
                amount={expenses[0].amount} 
                date={expenses[0].date}
            />
            <ExpenseItem 
                title={expenses[1].title}
                amount={expenses[1].amount} 
                date={expenses[1].date}
            />
            <ExpenseItem 
                title={expenses[2].title}
                amount={expenses[2].amount} 
                date={expenses[2].date}
            />
            <ExpenseItem 
                title={expenses[3].title}
                amount={expenses[3].amount} 
                date={expenses[3].date}
            />
        </Card>
    )
}

export default Expenses;