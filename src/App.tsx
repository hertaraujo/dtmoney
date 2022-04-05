// Components
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
// Context
import { TransactionsProvider } from "./hooks/useTransactions";
// Hooks
import { useState } from "react";
// Styles
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const openNewTransactionModalHandler = () => {
    setIsNewTransactionModalOpen(true);
  };
  const closeNewTransactionModalHandler = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={openNewTransactionModalHandler} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeNewTransactionModalHandler}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
