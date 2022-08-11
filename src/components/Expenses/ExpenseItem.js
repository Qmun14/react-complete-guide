import React, {useState} from 'react';

import Card from '../UI/Card.js';
import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated by clicked!');
    console.log(title);
  }   

  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Rp. {props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
