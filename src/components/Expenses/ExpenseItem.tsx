import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
import { useState } from "react";

type Props = {
  title: string;
  amount: number;
  date: Date;
};

export const ExpenseItem = (props: Props) => {
  const { title, amount, date } = props;

  const [currentTitle, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={date} />
      <div className="expense-item__description">
        <h2>{currentTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
