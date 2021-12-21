 import ExpenseDate from './ExpenseDate';
 import './ExpenseItem.css';
 import Card from "../UI/Card";
 import React, { useState } from 'react';

const ExpenseItem = (props) => {


    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                <div className='expense-item_price'>&#x20B9;{props.amount}</div>
            </div>
        </Card>
     )
 }

 export default ExpenseItem;