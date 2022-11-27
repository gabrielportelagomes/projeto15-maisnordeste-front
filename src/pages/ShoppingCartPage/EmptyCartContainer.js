import styled from "styled-components";
import { BsCartX } from "react-icons/bs";

export default function EmptyCardContainer() {
  return (
    <EmptyCardContainerStyle>
      <BsCartX />
      <h1>Seu carrinho está vazio</h1>
    </EmptyCardContainerStyle>
  );
}

const EmptyCardContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  svg {
    font-size: 200px;
    color: white;
  }
  h1 {
    font-style: italic;
    margin-top: 40px;
  }
`;
