import styled from "styled-components";

export default function AddProductsLoggedIn() {
  return (
    <AddProductsLoggedInStyle>
      <button>Escolha mais produtos</button>
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
  }
`;
