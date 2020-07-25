import React from "react";

export const Trasaction = ({ list }) => {
  const sign = list.amount < 0 ? "-" : "+";
  return (
    <li className={list.amount < 0 ? "minus" : "plus"}>
      {list.text}{" "}
      <span>
        {sign}€{Math.abs(list.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};
