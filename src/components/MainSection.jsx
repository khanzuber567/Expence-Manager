import React, { useContext,useState } from "react";
import TransactionContext from "../Context/TransactionContext";

const MainSection = () => {

 const {transactions, saveTransactions} = useContext(TransactionContext)

  const [text, setText] = useState("")
  const[amount, setAmount] =useState("")
  
const totalBalance = transactions.reduce((p,c)=>{
  return p+c.amount

},0)
  
const handleSubmit = (e) => {
  e.preventDefault();
 saveTransactions(text, amount)
 setText("");
 setAmount("");
}

  return (
    <div className="main-section">
      <div id="current-bal" className="balance">
        <span>
          <p>Current Balance</p>
          <h1>₹{totalBalance}</h1>
        </span>
        <i className="fa-solid fa-wallet"></i>
      </div>

      <form className="transaction-form" onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Enter Your Transaction"onChange={(e)=>setText(e.target.value)}
          value={text}/>
        <input
          type="number"
          placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)}
          value={amount}/>
        <button>
          Save Transaction<i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  );
};

export default MainSection;
