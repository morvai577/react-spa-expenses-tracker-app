import './ExpenseDate.css';

type Props = {
  expenseDate: Date;
};

export const ExpenseDate = (props: Props) => {
  const month = props.expenseDate.toLocaleString('en-US', { month: 'long' });
  const day = props.expenseDate.toLocaleString('en-US', { day: '2-digit' });
  const year = props.expenseDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};
