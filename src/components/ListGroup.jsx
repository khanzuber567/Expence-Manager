import ListItem from "./ListItem";
import { useContext } from "react";
import TransactionContext from "../Context/TransactionContext";

const ListGroup = () => {
  const {transactions} = useContext(TransactionContext)
  return (
    <ul className="list-group">
     {
      transactions.map(transaction =><ListItem key={transaction.id} transaction={transaction}/>)
     }
    </ul>
  );
};

export default ListGroup;
