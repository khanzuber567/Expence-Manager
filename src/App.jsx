import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import BalanceSection from "./components/BalanceSection";
import ListGroup from "./components/ListGroup";
import { TransactionProvider } from "./Context/TransactionContext";






function App() {


  return (
    <TransactionProvider>
      <Navbar />
      <div className="container">
        <MainSection />
        <BalanceSection />
        <ListGroup />
      </div>
    </TransactionProvider>
  );
}

export default App;
