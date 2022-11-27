import styled from "styled-components";

export default function TotalFooter() {
  return (
    <TotalFooterStyle>
      <div>
        <h3>Total: R$ 3.500,00</h3>
        <button>Continuar</button>
      </div>
    </TotalFooterStyle>
  );
}

const TotalFooterStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
  height: 50px;
  bottom: 0;
  position: fixed;
  div {
    align-items: center;
    padding: 10px;
    display: flex;
    width: 390px;
    justify-content: space-between;
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
  }
`;
