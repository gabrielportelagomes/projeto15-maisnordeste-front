import axios from "axios";
import { useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../providers/auth";
import { useUserData } from "../providers/userData";
import Logo from "./Logo";
import URL from "../constants/url";
import { IoIosArrowDown } from "react-icons/io";
import { useCartData } from "../providers/cartData";
import { BiLogOut } from "react-icons/bi";

function Header() {
  const { userAuth, setUserAuth } = useAuth();
  const { userData, setUserData } = useUserData();
  const { cartData, setCartData } = useCartData();
  const [menuOpen, setMenuOpen] = useState();

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
  }, [userAuth]);

  useEffect(() => {
    if (userAuth !== undefined) {
      axios
        .get(`${URL}/cart`, {
          headers: {
            Authorization: `Bearer ${userAuth.token}`,
          },
        })
        .then((response) => {
          setCartData(response.data);
        })
        .catch((error) => console.log(error.response.data.message));
    }
  }, [userAuth]);

  function logOut() {
    axios
      .delete(`${URL}/sessions`, {
        headers: {
          Authorization: `Bearer ${userAuth.token}`,
        },
      })
      .then(() => {
        localStorage.removeItem("userAuthMaisNordeste");
        setUserAuth(undefined);
      })
      .catch((error) => console.log(error.response.data.message));
  }

  if (userAuth === undefined) {
    return (
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
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

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      {userData ? (
        <UserInfo>
          <h3>Olá, {userData.name}</h3>
          <IoIosArrowDown onClick={() => setMenuOpen(!menuOpen)} />
          {menuOpen && (
            <DropdownMenuActive>
              <Option onClick={logOut}>
                <BiLogOut />
                <h3>Sair</h3>
              </Option>
            </DropdownMenuActive>
          )}
        </UserInfo>
      ) : (
        <Welcome>
          <h3>Bem-vindo(a)!</h3>
        </Welcome>
      )}
      {!cartData ? (
        <Link to="/carrinho">
          <CartIcon>
            <TiShoppingCart />
          </CartIcon>
        </Link>
      ) : cartData.length === 0 ? (
        <Link to="/carrinho">
          <CartIcon>
            <TiShoppingCart />
          </CartIcon>
        </Link>
      ) : (
        <Link to="/carrinho">
          <CartIcon>
            <TiShoppingCart />
            <ItemsCart>
              <span>{cartData.length}</span>
            </ItemsCart>
          </CartIcon>
        </Link>
      )}
    </HeaderContainer>
  );
}

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

const Welcome = styled.div`
  width: 125px;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 0 25px;
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
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
  svg {
    cursor: pointer;
  }
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

const DropdownMenuActive = styled.div`
  width: 125px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #ffffff;
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    right: 10px;
    height: 20px;
    width: 20px;
    background: #ffffff;
    z-index: -1;
    transform: rotate(45deg);
  }
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 18px;
  color: #000000;
  h3 {
    font-size: 14px;
  }
  &:hover {
    color: #d52b2b;
    cursor: pointer;
  }
`;

export default Header;
