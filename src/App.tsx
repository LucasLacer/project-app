import  Header  from "./components/Header/Header";
import Footer  from "./components/Footer/Footer"
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import ProductsPage from "./components/ProductsPage/ProductsPage"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
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
          <Route path="/" element={<HomePage />}/>
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}
function HomePage() {
  return (<div>
    <Header title='Home Page' />
    <Insert />
    <GlobalStyle />
    <Footer/> 
  </div>)
}

