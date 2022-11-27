import CartPageContainer from "./CartPageContainer";
import Header from "../../components/Header";
import PurchasesContainer from "./PurchasesContainer";
import CardPurchase from "./CardPurchase";
import AddProductsContainer from "./AddProductsContainer";
import TotalFooter from "./TotalFooter";
import EmptyCardContainer from "./EmptyCartContainer";

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
      <AddProductsContainer />
      <TotalFooter />
    </CartPageContainer>
  );
}

export default ShoppingCartPage;
