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
import ProductsPage from "./components/ProductsPage/ProductsPage"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Insert from "./components/Insert/Insert";

Modal.setAppElement('#root')
const client = new ApolloClient({
  uri: 'https://frontend-code-challenge-api.ze.delivery/graphql',
  cache: new InMemoryCache(),
});

export function App() {


  return (
    <Router>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<HomePage />}>

          </Route>
          <Route path="/products" element={<ProductsPage vendorId="532"/>} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}
function HomePage() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  return (<div>
    <Header />
    <Insert />
    <GlobalStyle />
  </div>)
}

