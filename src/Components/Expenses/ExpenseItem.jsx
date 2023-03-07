/** @format */

import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title,amount }) => {
//  const [titles,setTitle] =  useState(title)
  // const clickHandler = () => {
  //   setTitle("Updated")
  //   console.log(titles)
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
