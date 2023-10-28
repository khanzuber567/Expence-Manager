import React from "react";
import { useContext } from "react";
import TransactionContext from "../Context/TransactionContext";

const BalanceSection = () => {


  const {transactions}= useContext (TransactionContext)
 
  const income = transactions.filter(transactions => {
    if (transactions.amount >0) {
      return true;
    }
  })
  .reduce((p,c)=>{
    return p+c.amount;
  },0)

  const expence = transactions.filter(transactions => {
    if (transactions.amount < 0) {
      return true;
    }
  })
  .reduce((p,c)=>{
    return p+c.amount;
  },0)
  

  return (
    <div id="current-status" className="main-section">
      <div id="income" className="balance">
        <span>
          <p>Current Income</p>
          <h1>₹{income}</h1>
        </span>
      </div>

      <div id="expense" className="balance">
        <span>
          <p>Current Expense</p>
          <h1>₹{expence}</h1>
        </span>
      </div>
    </div>
  );
};

export default BalanceSection;
