import styled from "styled-components";
import Header from "../../components/Header";
import { useCartData } from "../../providers/cartData";
import { BsFillCheckCircleFill as CheckIcon } from "react-icons/bs";
import { BsFillXCircleFill as CloseIcon } from "react-icons/bs";
import { BsCalendarCheck as CalendarIcon } from "react-icons/bs";
import LoadingPage from "../../assets/styles/LoadingPage";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import axios from "axios";
import barCode from "../../assets/images/barCode.png";
import pix from "../../assets/images/pix.png";
import creditCard from "../../assets/images/creditCard.png";
import barCodeSelected from "../../assets/images/barCode-selected.png";
import pixSelected from "../../assets/images/pix-selected.png";
import creditCardSelected from "../../assets/images/creditCard-selected.png";

function CheckoutPage() {
  const navigate = useNavigate();
  const { userAuth } = useAuth();
  const { cartData } = useCartData();
  const [total, setTotal] = useState();
  const [userId, setUserId] = useState();
  const [payment, setPayment] = useState();

  function formatValue(value) {
    let newValue = `${value}`;
    newValue = newValue.replace(/\D/g, "");
    newValue = newValue.replace(/(\d)(\d{2})$/, "$1,$2");
    newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
    return newValue;
  }

  function sendOrder() {
    const orders = cartData;
    orders.forEach((order) => {
      order.productId = order._id;

      delete order.idProduct;
      delete order._id;
      delete order.user;
    });

    const body = {
      userId: userId,
      total: total,
      payment: payment,
      orders: orders,
    };

    console.log(body);

    axios
      .post(`http://localhost:5000/orders`, body, {
        headers: {
          Authorization: `Bearer ${userAuth.token}`,
        },
      })
      .then(() => navigate("/"))
      .catch((error) => console.log(error.response.data));
  }

  useEffect(() => {
    if (cartData) {
      let newTotal = 0;
      cartData.forEach((product) => {
        newTotal += product.subtotal;
      });
      setTotal(newTotal);
    }
    if (cartData && !userId) {
      setUserId(cartData[0].user);
    }
  }, [cartData]);

  if (!cartData) {
    return (
      <PageContainer>
        <Header />
        <AccessInfo>
          <LoadingPage />
          <h1>Tenha certeza de estar logado e de ter produtos no carrinho!</h1>
          <BackContainer>
            <Link to="/">
              <p>Voltar para a página inicial</p>
            </Link>
          </BackContainer>
        </AccessInfo>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      <OrderContainer>
        <h1>Resumo do pedido:</h1>
        <SummaryContainer>
          <Summary>
            {cartData.map((product) => (
              <Product key={product._id}>
                <Top>{product.title}</Top>
                <Middle>
                  <img src={product.image} alt={product.title} />
                  <PurchaseSummary>
                    <header>Resumo da compra</header>
                    <li>
                      <CalendarIcon color="darkblue" />
                      Quando? {product.season}
                    </li>
                    <li>
                      {product.breakfast ? (
                        <CheckIcon color="green" />
                      ) : (
                        <CloseIcon color="red" />
                      )}
                      Café da manhã
                    </li>
                    <li>
                      {product.transport ? (
                        <CheckIcon color="green" />
                      ) : (
                        <CloseIcon color="red" />
                      )}
                      Translado
                    </li>
                    <Amount>Quantidade: {product.amount}</Amount>
                    <h3>Valor: R$ {formatValue(product.subtotal)}</h3>
                  </PurchaseSummary>
                </Middle>
              </Product>
            ))}
          </Summary>
        </SummaryContainer>
        <h2>Selecione uma forma de pagamento:</h2>
        <PaymentContainer>
          <Payment onClick={() => setPayment("boleto")}>
            {payment === "boleto" ? (
              <img src={barCodeSelected} alt="barCode" />
            ) : (
              <img src={barCode} alt="barCode" />
            )}

            <p>Boleto bancário</p>
          </Payment>
          <Payment onClick={() => setPayment("credito")}>
            {payment === "credito" ? (
              <img src={creditCardSelected} alt="credito" />
            ) : (
              <img src={creditCard} alt="credito" />
            )}

            <p>Crédito 12x</p>
          </Payment>
          <Payment onClick={() => setPayment("pix")}>
            {payment === "pix" ? (
              <img src={pixSelected} alt="creditCard" />
            ) : (
              <img src={pix} alt="creditCard" />
            )}

            <p>pix</p>
          </Payment>
        </PaymentContainer>
      </OrderContainer>
      <Footer>
        <p>Total: R$ {formatValue(total)}</p>
        {!payment ? (
          <AddButton
            active={true}
            onClick={() =>
              alert("Selecione uma forma de pagamento ao final da página!")
            }
          >
            Finalizar pedido
          </AddButton>
        ) : (
          <AddButton active={false} onClick={sendOrder}>
            Finalizar pedido
          </AddButton>
        )}
      </Footer>
    </PageContainer>
  );
}

export default CheckoutPage;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 110px;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 110px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
  h1 {
    margin-top: 20px;
    width: 340px;
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    font-size: 24px;
    color: #ffffff;
  }
  h2 {
    margin-top: 20px;
    width: 340px;
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
  }
`;

const AccessInfo = styled.div`
  width: 340px;
  font-family: "Comfortaa", cursive;
  color: #ffffff;
  margin-top: 100px;
  h1 {
    font-family: "Comfortaa", cursive;
    font-weight: 700;
    font-size: 22px;
    text-align: center;
  }
  a {
    font-weight: 400;
    font-size: 16px;
  }
`;

const BackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  a {
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
  }
`;

const SummaryContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const Summary = styled.div`
  width: 340px;
  background-color: rgba(255, 255, 255, 0.8);

  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Product = styled.div`
  width: 340px;
  height: 180px;
  display: flex;
  flex-direction: column;
`;

const Top = styled.section`
  display: flex;
  justify-content: center;
  margin: 10px;
  border-bottom: 1px solid dimgrey;
`;
const Middle = styled.section`
  display: flex;
  justify-content: space-between;
  img {
    width: 50%;
    border-radius: 0 10px 10px 0;
    height: 100px;
    object-fit: cover;
  }
`;
const PurchaseSummary = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  margin: 0 5px;
  gap: 5px;
  header {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  svg {
    margin-right: 5px;
  }
  h3 {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-weight: 700;
    font-size: 14px;
    margin-top: 5px;
    padding-right: 5px;
  }
`;

const Amount = styled.h4`
  width: 100%;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 12px;
  color: #000000;
  text-align: right;
  padding-right: 5px;
`;

const PaymentContainer = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;
`;

const Payment = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  p {
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    margin-top: 5px;
  }
  img {
    width: 50px;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  p {
    font-family: "Comfortaa", cursive;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    margin-left: 20px;
  }
`;

const AddButton = styled.button`
  width: 150px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active ? "#dcdcdc" : "#4ecb71")};
  margin-right: 20px;
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: ${(props) => (props.active ? "cursor" : "pointer")};
`;
