import React from "react";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function ExpenseItemList(props) {
  const [filteredYear, setFilteredYear] = React.useState("2020");

  const [filteredExpense, setFilteredExpense] = React.useState(props.expenses);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setFilteredExpense(() =>
      props.expenses.filter((arr) => {
        return arr.date.getFullYear().toString() === selectedYear;
      })
    );
  };

  return (
    <div>
      <Card className="expenses-item-list">
        <ExpensesFilter
          onSelectOption={filterChangeHandler}
          defaultSelected={filteredYear}
        />
        <ExpenseChart expenses = {filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default ExpenseItemList;
