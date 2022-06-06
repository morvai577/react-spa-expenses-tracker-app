import "./NewExpense.css";
import { ExpenseForm } from "@/components/NewExpense/ExpenseForm";

export const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm></ExpenseForm>
    </div>
  );
};
