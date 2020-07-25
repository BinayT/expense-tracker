import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Trasaction } from "./Trasaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((el) => (
          <Trasaction list={el} key={el.id} />
        ))}
      </ul>
    </div>
  );
};
