import { createContext, useState } from "react";

const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {

  const [transactions, setTransactions] = useState([
    { id: 1, text: "Salary", amount: 100000 },
    { id: 2, text: "Rent", amount: -25000 },
  ])

  const saveTransactions = (text, amount) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      text,
      amount: parseInt(amount),
    }
    setTransactions([...transactions, newTransaction])
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(item => item.id !== id))
  }


  return (
    <TransactionContext.Provider value={{ transactions, saveTransactions, deleteTransaction }}>
      {children}
    </TransactionContext.Provider>

  )


}





export default TransactionContext
