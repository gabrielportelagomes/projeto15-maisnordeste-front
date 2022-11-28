import styled from "styled-components";
import { Link } from "react-router-dom";

export default function AddProductsLoggedIn() {
  return (
    <AddProductsLoggedInStyle>
      <Link to="/">
        <button>Escolha mais produtos</button>
      </Link>
    </AddProductsLoggedInStyle>
  );
}

const AddProductsLoggedInStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  button {
    height: 40px;
    width: 283px;
    margin-top: 20px;
    margin-bottom: 60px;
    background-color: #3003b2;
    font-size: 16px;
    color: white;
    cursor: pointer;
  }
`;
