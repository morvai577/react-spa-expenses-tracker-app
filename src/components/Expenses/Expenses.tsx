import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import "./Expenses.css";

type Props = {
  items: any[];
};

export const Expenses = (props: Props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
