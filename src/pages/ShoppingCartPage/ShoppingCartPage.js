import CartPageContainer from "./CartPageContainer";
import Header from "../../components/Header";
import PurchasesContainer from "./PurchasesContainer";
import CardPurchase from "./CardPurchase";
import AddProductsLoggedOut from "./AddProductsLoggedOut";
import TotalFooter from "./TotalFooter";
import EmptyCardContainer from "./EmptyCartContainer";
import AddProductsLoggedIn from "./AddProductsLoggedIn";
import { useUserData } from "../../providers/userData";
import { useState, useEffect } from "react";

function ShoppingCartPage() {
  const { userData } = useUserData();
  const purchases = [
    {
      user: 1234567890,
      subtotal: "330000",
      title: "Galinhos", // --> salvar com letra maiúscula
      image: "https://i.imgur.com/fjAoE7y.jpg", // --> adicionei para facilitar a renderização
      state: "RN",
      season: "Natal", //--> ver comentário abaixo
      seasonTag: "natal",
      amount: 2,
      breakfast: true,
      transport: false,
    },
    {
      user: 1234567890,
      subtotal: "800000",
      title: "Fortaleza", // --> salvar com letra maiúscula
      image: "https://i.imgur.com/hheRsCz.jpg", // --> adicionei para facilitar a renderização
      state: "CE",
      season: "Mai-Jun", //--> ver comentário abaixo
      seasonTag: "baixaTemporada1",
      amount: 4,
      breakfast: false,
      transport: true,
    },
  ];

  return (
    <CartPageContainer>
      <Header />
      <h1>Carrinho ({purchases.length})</h1>
      <PurchasesContainer>
        {purchases.length === 0 ? (
          <EmptyCardContainer />
        ) : (
          purchases.map((purchase) => (
            <CardPurchase key={purchase.title} purchase={purchase} />
          ))
        )}
      </PurchasesContainer>
      {userData ? <AddProductsLoggedIn /> : <AddProductsLoggedOut />}
      <TotalFooter />
    </CartPageContainer>
  );
}

export default ShoppingCartPage;
