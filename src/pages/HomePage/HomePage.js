import styled from "styled-components";
import Logo from "../../components/Logo";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

function HomePage() {
  const states = [
    { name: "Alagoas", image: "https://i.imgur.com/GVaiKyO.jpeg", state: "AL" },
    { name: "Bahia", image: "https://i.imgur.com/O8T4at2.jpeg", state: "BA" },
    { name: "Ceará", image: "https://i.imgur.com/BMTIeLA.jpeg", state: "CE" },
    {
      name: "Maranhão",
      image: "https://i.imgur.com/soSWHek.jpeg",
      state: "MA",
    },
    { name: "Paraíba", image: "https://i.imgur.com/W5woXVC.jpeg", state: "PB" },
    {
      name: "Pernambuco",
      image: "https://i.imgur.com/IJP25im.jpeg",
      state: "PE",
    },
    { name: "Piauí", image: "https://i.imgur.com/EYqaMQr.jpeg", state: "PI" },
    {
      name: "Rio Grande do Norte",
      image: "https://i.imgur.com/6QbZ0T0.jpeg",
      state: "RN",
    },
    { name: "Sergipe", image: "https://i.imgur.com/QQ0XTP8.jpeg", state: "SE" },
  ];

  return (
    <PageContainer>
      <Header>
        <Logo />
        <Link to="/login">
          <SignInButton>Entrar</SignInButton>
        </Link>
        <Link to="/carrinho">
          <CartIcon>
            <TiShoppingCart />
            <ItemsCart>
              <span>X</span>
            </ItemsCart>
          </CartIcon>
        </Link>
      </Header>
      <Title>Qual Nordeste você quer conhecer?</Title>
      <StatesContainer>
        {states.map((state, id) => (
          <State key={id} stateImage={state.image} id={state.state}>
            <p>{state.name}</p>
          </State>
        ))}
      </StatesContainer>
      <CategoriesButton>Busque por categoria</CategoriesButton>
    </PageContainer>
  );
}

export default HomePage;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 340px;
  display: flex;
  justify-content: flex-end;
  margin: 20px 25px;
`;

const SignInButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #b2b2b2;
  margin: 0 25px;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
`;
const CartIcon = styled.div`
  width: 40px;
  height: 40px;
  font-size: 40px;
  color: #ffffff;
  position: relative;
`;

const ItemsCart = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4ecb71;
  border-radius: 50%;
  position: absolute;
  left: -10px;
  bottom: 0px;
  span {
    font-family: "Comfortaa", cursive;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }
`;

const Title = styled.h1`
  width: 340px;
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
`;

const StatesContainer = styled.div`
  width: 340px;
  margin-top: 30px;
`;

const State = styled.div`
  width: 340px;
  height: 60px;
  display: flex;
  align-items: flex-end;
  border-radius: 5px;
  background-color: aliceblue;
  background-image: url(${(props) => props.stateImage});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  p {
    font-family: "Comfortaa", cursive;
    font-weight: 700;
    font-size: 28px;
    color: #ffffff;
    margin: 5px;
  }
  &:hover {
    height: 200px;
    transition: 500ms;
  }
`;

const CategoriesButton = styled.button`
  width: 230px;
  height: 35px;
  background-color: #3003b2;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  position: fixed;
  bottom: 30px;
`;
