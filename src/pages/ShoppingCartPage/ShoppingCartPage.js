import CartPageContainer from "./CartPageContainer";
import Header from "../../components/Header";
import PurchasesContainer from "./PurchasesContainer";
import CardPurchase from "./CardPurchase";
import AddProductsLoggedOut from "./AddProductsLoggedOut";
import TotalFooter from "./TotalFooter";
import EmptyCardContainer from "./EmptyCartContainer";
import AddProductsLoggedIn from "./AddProductsLoggedIn";

function ShoppingCartPage() {
  return (
    <CartPageContainer>
      <Header />
      <h1>Carrinho (2)</h1>
      <PurchasesContainer>
        <CardPurchase />
        <CardPurchase />
        {/* <EmptyCardContainer/> */}
      </PurchasesContainer>
      <AddProductsLoggedOut />
      {/* <AddProductsLoggedIn /> */}
      <TotalFooter />
    </CartPageContainer>
  );
}

export default ShoppingCartPage;
