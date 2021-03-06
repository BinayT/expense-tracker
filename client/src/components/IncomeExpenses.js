import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((el) => el.amount);

  const totalIncome = amounts
    .filter((el) => el > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  console.log(totalIncome);

  const totalExpense = (
    amounts.filter((el) => el < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+€{totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-€{totalExpense}</p>
      </div>
    </div>
  );
};
