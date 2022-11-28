import styled from "styled-components";
import Header from "../../components/Header";
import { BsFillCheckCircleFill as CheckIcon } from "react-icons/bs";
import { BsFillXCircleFill as CloseIcon } from "react-icons/bs";
import { BsCalendarCheck as CalendarIcon } from "react-icons/bs";
import LoadingPage from "../../assets/styles/LoadingPage";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import axios from "axios";
import URL from "../../constants/url";

function OrderPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { userAuth } = useAuth();
  const [order, setOrder] = useState();

  useEffect(() => {
    if (userAuth) {
      axios
        .get(`${URL}/orders/${id}`, {
          headers: {
            Authorization: `Bearer ${userAuth.token}`,
          },
        })
        .then((response) => {
          setOrder(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
          navigate("*");
        });
    }
  }, [userAuth]);

  function formatValue(value) {
    let newValue = `${value}`;
    newValue = newValue.replace(/\D/g, "");
    newValue = newValue.replace(/(\d)(\d{2})$/, "$1,$2");
    newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
    return newValue;
  }

  if (!order) {
    return (
      <PageContainer>
        <Header />
        <AccessInfo>
          <LoadingPage />
          <h1>Tenha certeza de estar logado!</h1>
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
        <h1>Pedido nº : {order._id}</h1>
        <SummaryContainer>
          <Summary>
            {order.orders.map((product, id) => (
              <Product key={id}>
                <Top>
                  {product.title} - {product.state}
                </Top>
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
            <Botton>
              <span>Total R$ {formatValue(order.total)}</span>
            </Botton>
          </Summary>
        </SummaryContainer>
      </OrderContainer>
      <ButtonContainer>
        <Link to="/pedidos">
          <Button>Voltar para pedidos</Button>
        </Link>
      </ButtonContainer>
    </PageContainer>
  );
}

export default OrderPage;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 110px;
  margin-top: 20px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
  h1 {
    width: 340px;
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    font-size: 22px;
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

const Botton = styled.section`
  display: flex;
  justify-content: center;
  border-top: 2px solid dimgrey;
  span {
    width: 100%;
    font-family: "Comfortaa", cursive;
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    text-align: right;
    padding: 10px;
  }
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

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 30px;
`;

const Button = styled.button`
  width: 230px;
  height: 35px;
  background-color: #3003b2;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;
