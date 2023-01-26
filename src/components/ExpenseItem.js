import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const changetitle = () => {
        setTitle("Title Changed");
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h3>{title}</h3>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={changetitle}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
