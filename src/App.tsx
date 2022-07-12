import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Insert from "./components/Insert/Insert";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <Router>
      <Header
        onOpenNewTransactionsModal={handleOpenNewTransactionModal} />
        <Insert/>
      <GlobalStyle />
    </Router>
  );
}

