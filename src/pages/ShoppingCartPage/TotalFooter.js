import styled from "styled-components";

export default function TotalFooter() {
  return (
    <TotalFooterStyle>
      <h3>Total: R$ 3.500,00</h3>
      <button>Continuar</button>
    </TotalFooterStyle>
  );
}

const TotalFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 390px;
  background-color: white;
  height: 50px;
  bottom: 0;
  position: fixed;
  h3 {
    font-size: 16px;
    font-weight: 700;
  }
  button {
    width: 100px;
    height: 35px;
    background-color: #4ecb71;
    color: white;
    font-size: 14px;
  }
`;
