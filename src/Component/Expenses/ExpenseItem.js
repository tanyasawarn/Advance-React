import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('updated');
    console.log('clicked');
  };

  const clickHandlerForExpense = () => {
    setAmount(100);
    console.log('clicked');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__location'>{props.location}</div>
      <div className='expense-item__amount'>{amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandlerForExpense}>Add Expense</button>
    </Card>
  );
};

export default ExpenseItem;

