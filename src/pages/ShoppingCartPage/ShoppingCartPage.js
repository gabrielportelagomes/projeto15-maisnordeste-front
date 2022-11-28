import CartPageContainer from "./CartPageContainer";
import Header from "../../components/Header";
import PurchasesContainer from "./PurchasesContainer";
import CardPurchase from "./CardPurchase";
import TotalFooter from "./TotalFooter";
import EmptyCardContainer from "./EmptyCartContainer";
import AddProductsLoggedIn from "./AddProductsLoggedIn";
import { useUserData } from "../../providers/userData";
import { useEffect } from "react";
import { useAuth } from "../../providers/auth";
import PageContainer from "../AdminPage/PageContainer";
import LoadingPage from "../../assets/styles/LoadingPage";
import { useCartData } from "../../providers/cartData";
import LoggedOutScreen from "./LoggedOutScreen";

function ShoppingCartPage() {
  const { userData } = useUserData();
  const { userAuth } = useAuth();
  const { cartData, setCartData } = useCartData();

  useEffect(() => {}, [userData, userAuth, cartData]);

  if (!cartData) {
    return (
      <PageContainer>
        <Header />
        <LoadingPage />
      </PageContainer>
    );
  }
  if (!userAuth) {
    return (
      <PageContainer>
        <Header />
        <LoggedOutScreen />
      </PageContainer>
    );
  }

  if (cartData.length == 0) {
    return (
      <CartPageContainer>
        <Header />
        <EmptyCardContainer />
        <AddProductsLoggedIn />
      </CartPageContainer>
    );
  }

  return (
    <CartPageContainer>
      <Header />
      <h1>Carrinho ({cartData.length})</h1>
      <PurchasesContainer>
        {cartData.map((purchase, id) => (
          <CardPurchase key={id} purchase={purchase} />
        ))}
      </PurchasesContainer>
      <AddProductsLoggedIn />
      <TotalFooter />
    </CartPageContainer>
  );
}

export default ShoppingCartPage;
