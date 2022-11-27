import styled from "styled-components";

export default function AddProductsContainer() {
  return (
    <AddProductsContainerStyle>
      <button>Escolha mais produtos</button>
      <h2>Para finalizar sua compra, faça o login!</h2>
      <p>Primeira vez? Cadastre-se!</p>
    </AddProductsContainerStyle>
  );
}

const AddProductsContainerStyle = styled.section`
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

  h2 {
    color: white;
    width: 200px;
    font-size: 16px;
    text-align: center;
    margin-bottom: 10px;
  }
  p {
    color: white;
    font-size: 10px;
    font-weight: 700;
    margin-bottom: 60px;
  }
`;
