import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import ScreenContainer from "./components/ScreenContainer";
import AdminPage from "./pages/AdminPage/AdminPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import StatePage from "./pages/StatePage/StatePage";

function App() {
  const [emailForm, setEmailForm] = useState({
    email: "",
  });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScreenContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/categorias" element={<CategoriesPage />} />
          <Route path="/categorias/:categoria" element={<CategoryPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/pedidos" element={<OrdersPage />} />
          <Route path="/produtos/:idProduto" element={<ProductPage />} />
          <Route path="/carrinho" element={<ShoppingCartPage />} />
          <Route
            path="/login"
            element={
              <SignInPage emailForm={emailForm} setEmailForm={setEmailForm} />
            }
          />
          <Route
            path="/cadastro"
            element={
              <SignUpPage emailForm={emailForm} setEmailForm={setEmailForm} />
            }
          />
          <Route path="/estados/:estado" element={<StatePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ScreenContainer>
    </BrowserRouter>
  );
}

export default App;
