import axios from "axios";
import { useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../providers/auth";
import { useUserData } from "../providers/userData";
import Logo from "./Logo";
import URL from "../constants/url";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const { userAuth } = useAuth();
  const { userData, setUserData } = useUserData();

  useEffect(() => {
    if (userAuth !== undefined) {
      axios
        .get(`${URL}/users`, {
          headers: {
            Authorization: `Bearer ${userAuth.token}`,
          },
        })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => console.log(error.response.data.message));
    }
  }, []);

  if (userAuth === undefined) {
    return (
      <HeaderContainer>
        <Logo />
        <Link to="/login">
          <SignInButton>Entrar</SignInButton>
        </Link>
        <Link to="/carrinho">
          <CartIcon>
            <TiShoppingCart />
          </CartIcon>
        </Link>
      </HeaderContainer>
    );
  }

  console.log("teste");

  return (
    <HeaderContainer>
      <Logo />
      <UserInfo>
        <h3>Olá, {userData.name}</h3>
        <IoIosArrowDown />
      </UserInfo>
      <Link to="/carrinho">
        <CartIcon>
          <TiShoppingCart />
        </CartIcon>
      </Link>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
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

const UserInfo = styled.div`
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 25px;
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
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
