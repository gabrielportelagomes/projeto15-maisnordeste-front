import styled from "styled-components";
import { useEffect, useState } from "react";
import { useCartData } from "../../providers/cartData";

export default function TotalFooter() {
  const { cartData } = useCartData();
  const [total, setTotal] = useState();
  useEffect(() => {
    let value = 0;
    for (let i = 0; i < cartData.length; i++) {
      value += cartData[i].subtotal;
      setTotal((value / 100).toFixed(2).replace(".", ","));
    }
  }, [cartData]);

  return (
    <TotalFooterStyle>
      <div>
        <h3>Total: R$ {total}</h3>
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
