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
    width: 250px;
    font-size: 16px;
    height: 30px;
    background-color: #3003b2;
    color: white;
    margin: 20px auto;
    cursor: pointer;
  }
`;
