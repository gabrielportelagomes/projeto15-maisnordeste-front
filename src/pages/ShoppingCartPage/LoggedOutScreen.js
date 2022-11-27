import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdOutlineAppBlocking as BlockIcon } from "react-icons/md";

export default function LoggedOutScreen() {
  return (
    <LoggedOutScreenStyle>
      <BlockIcon />
      <h1>Acesso negado</h1>
      <p>Faça login para poder adicionar produtos ao carrinho</p>
      <Link to="/login">
        <button>Faça login aqui</button>
        <h2>Primeira vez? Cadastre-se!</h2>
      </Link>
    </LoggedOutScreenStyle>
  );
}

const LoggedOutScreenStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  svg {
    font-size: 200px;
    color: white;
  }
  h1 {
    margin-top: 40px;
  }
  p {
    text-align: center;
    width: 300px;
    color: white;
    margin-top: 20px;
  }
  button {
    width: 250px;
    font-size: 16px;
    height: 30px;
    background-color: #3003b2;
    color: white;
    margin-top: 40px;
    cursor: pointer;
  }
  h2 {
    color: white;
    font-size: 12px;
    text-align: center;
    margin-top: 20px;
    font-weight: 700;
  }
`;
