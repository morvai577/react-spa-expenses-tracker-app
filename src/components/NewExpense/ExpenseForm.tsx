// @flow
import "./ExpenseForm.css";
import { SyntheticEvent, useState } from "react";

export const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event: SyntheticEvent<HTMLInputElement>) => {
    setEnteredTitle(event.currentTarget.value);
  };

  const amountChangeHandler = (event: SyntheticEvent<HTMLInputElement>) => {
    setEnteredAmount(event.currentTarget.value);
  };

  const dateChangeHandler = (event: SyntheticEvent<HTMLInputElement>) => {
    setEnteredDate(event.currentTarget.value);
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior - i.e. reloading the page

    const expenseData: { date: Date; amount: string; title: string } = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
