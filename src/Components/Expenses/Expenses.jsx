/** @format */

import React, {useState} from "react";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ items }) => {

  const [filteredYear, setFilteredYear] = useState('2019')
  
  const filterChangeHandler = (selectedYear) => {
  setFilteredYear(selectedYear)
    
  };
   
  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });  

// let expensesContent = <p>No expenses found.</p>;
//   if ( filteredExpenses.length > 0 ) {
//     filteredExpenses.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//       />
//     ));
//    }


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {filteredExpenses.length === 0 ? <p>No expenses found.</p>} */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 && */}
        <ExpensesChart
          expenses={filteredExpenses}
        />
        <ExpensesList items={ filteredExpenses} />
      {/* {expensesContent} */}
      </Card>
    </div>
  );
};

export default Expenses;
