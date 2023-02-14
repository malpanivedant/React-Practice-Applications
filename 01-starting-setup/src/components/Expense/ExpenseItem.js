import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [head, setTitle] = React.useState(props.title);
  const clickHandler = () => {
    setTitle("Updated!");
    console.log("Clicked !!!!");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2 className="expense-item h2">{head}</h2>
          <div className="expense-item__price">{`$${props.amount}`}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}
export default ExpenseItem;
