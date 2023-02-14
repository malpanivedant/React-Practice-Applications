import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = React.useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = React.useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [enteredDate, setEnteredDate] = React.useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    setAddExpenseState(false);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };
  // const [userInput, setUserInput] = React.useState({
  //     enteredTitle : '',
  //     enteredAmount: '',
  //     enteredDate:''
  // });

  // const valueChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //         return {...prevState, enteredTitle: event.target.value};
  //     });
  // }

  const [addExpenseState, setAddExpenseState] = React.useState(false);

  const addExpenseHandler = () => {
    setAddExpenseState(true);
  };

  if (addExpenseState) {
    return (
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2025-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__control">
          <button type="cancel" onClick={cancelHandler}>
            Cancel
          </button>
          <button type="submit" onClick={submitHandler}>
            Add Expense
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <div className="new-expense__control">
        <button type="submit" onClick={addExpenseHandler}>
          Add New Expense
        </button>
      </div>
    );
  }
};

export default ExpenseForm;
