import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import URL from "../../constants/url";
import LoadingPage from "../../assets/styles/LoadingPage";
import Header from "../../components/Header";
import { useAuth } from "../../providers/auth";

function OrdersPage() {
  const { userAuth } = useAuth();
  const [orders, setOrders] = useState();

  useEffect(() => {
    if (userAuth) {
      axios
        .get(`${URL}/orders`, {
          headers: {
            Authorization: `Bearer ${userAuth.token}`,
          },
        })
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          alert(error.response.data);
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

  function statusColor(status) {
    if (status === "em análise") {
      return "#4092CF";
    } else if (status === "aprovado") {
      return "#4ECB71";
    } else {
      return "#D52B2B";
    }
  }

  if (!orders) {
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

  if (orders.length === 0) {
    return (
      <PageContainer>
        <Header />
        <Info>
          <h1>Você não realizou nenhuma compra!</h1>
        </Info>
        <ButtonContainer>
          <Link to="/">
            <Button>Ir para página inicial</Button>
          </Link>
        </ButtonContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      <Title>Meus pedidos:</Title>
      <OrdersContainer>
        {orders.map((order, id) => (
          <Link key={id} to={`/pedidos/${order._id}`}>
            <Order color={statusColor(order.status)}>
              <h1>Pedido nº : {order._id}</h1>
              <p>Data: {order.date}</p>
              <p>Forma de pagamento: {order.payment}</p>
              <p>Valor total: R$ {formatValue(order.total)}</p>
              <p>
                Status do pedido: <span>{order.status}</span>
              </p>
            </Order>
          </Link>
        ))}
      </OrdersContainer>
    </PageContainer>
  );
}

export default OrdersPage;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  width: 340px;
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
  margin-top: 20px;
`;

const OrdersContainer = styled.div`
  width: 340px;
  margin-top: 30px;
  margin-bottom: 70px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;

const Order = styled.div`
  width: 340px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-items: flex-top;
  border-radius: 5px;
  background-color: aliceblue;
  background-image: url(${(props) => props.stateImage});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  margin-bottom: 10px;
  font-family: "Comfortaa", cursive;
  h1 {
    width: 100%;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
    text-align: center;
    margin: 10px 0;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    padding: 5px;
  }
  span {
    color: ${(props) => props.color};
    font-weight: 700;
  }
`;

const Info = styled.div`
  width: 340px;
  h1 {
    width: 100%;
    font-family: "Comfortaa", cursive;
    font-weight: 700;
    font-size: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 200px;
  }
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
