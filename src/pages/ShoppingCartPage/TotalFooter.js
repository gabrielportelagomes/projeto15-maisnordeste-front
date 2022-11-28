import styled from "styled-components";
import { useEffect, useState } from "react";
import { useCartData } from "../../providers/cartData";
import { Link } from "react-router-dom";

export default function TotalFooter() {
  const { cartData } = useCartData();
  const [total, setTotal] = useState();
  useEffect(() => {
    let value = 0;
    for (let i = 0; i < cartData.length; i++) {
      value += Number(cartData[i].subtotal);
      setTotal(value);
    }
  }, [cartData]);

  function formatValue(value) {
    let newValue = `${value}`;
    newValue = newValue.replace(/\D/g, "");
    newValue = newValue.replace(/(\d)(\d{2})$/, "$1,$2");
    newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
    return newValue;
  }

  return (
    <TotalFooterStyle>
      <div>
        <h3>Total: R$ {formatValue(total)}</h3>
        <Link to="/checkout">
          <button>Continuar</button>
        </Link>
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
      cursor: pointer;
    }
  }
`;
