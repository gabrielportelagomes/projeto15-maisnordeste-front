import styled from "styled-components";
import { useEffect, useState } from "react";
import CardPurchaseStyle from "./CardPurchaseStyle";
import { BsFillCheckCircleFill as CheckIcon } from "react-icons/bs";
import { BsFillXCircleFill as CloseIcon } from "react-icons/bs";
import { BsCalendarCheck as CalendarIcon } from "react-icons/bs";
import { IoIosRemoveCircleOutline as MinusIcon } from "react-icons/io";
import { IoIosAddCircleOutline as PlusIcon } from "react-icons/io";
import { BsFillTrashFill as TrashIcon } from "react-icons/bs";

export default function CardPurchase({ purchase }) {
  console.log(purchase);
  const { user, subtotal, title, image, season, amount, breakfast, transport } =
    purchase;
  const pricePerUnity = subtotal / amount;
  const [updatedAmount, setUpdatedAmount] = useState(amount);
  const [updatedSubTotal, setUpdatedSubTotal] = useState(subtotal);

  return (
    <CardPurchaseStyle>
      <Top>{title}</Top>
      <Middle>
        <img src={image} alt={title} />
        <PurchaseSummary>
          <header>Resumo da compra</header>
          <li>
            <CalendarIcon color="darkblue" />
            Quando? {season}
          </li>
          <li>
            {breakfast ? (
              <CheckIcon color="green" />
            ) : (
              <CloseIcon color="red" />
            )}
            Café da manhã
          </li>
          <li>
            {transport ? (
              <CheckIcon color="green" />
            ) : (
              <CloseIcon color="red" />
            )}
            Translado
          </li>
          <h3>
            Valor: R$ {(updatedSubTotal / 100).toFixed(2).replace(".", ",")}
          </h3>
        </PurchaseSummary>
      </Middle>
      <Bottom>
        <AmountContainer>
          <div>
            <MinusIcon onClick="" />
            <h3>{updatedAmount}</h3>
            <PlusIcon onClick="" />
          </div>
          <p>Alterar quantidade</p>
        </AmountContainer>
        <RemoveContainer>
          <div>
            <TrashIcon />
            <p>Remover do carrinho</p>
          </div>
        </RemoveContainer>
      </Bottom>
    </CardPurchaseStyle>
  );
}

const Top = styled.section`
  display: flex;
  justify-content: center;
  margin: 10px;
  border-bottom: 1px solid dimgrey;
`;
const Middle = styled.section`
  display: flex;
  justify-content: space-between;
  img {
    width: 50%;
    border-radius: 0 10px 10px 0;
    height: 100px;
    object-fit: cover;
  }
`;
const PurchaseSummary = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  margin: 0 5px;
  gap: 5px;
  header {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  svg {
    margin-right: 5px;
  }
  h3 {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-weight: 700;
    font-size: 14px;
    margin-top: 5px;
    padding-right: 5px;
  }
`;
const Bottom = styled.section`
  display: flex;
  flex-direction: row;
`;
const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  margin-top: 5px;

  div {
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 25px;
    border-radius: 10px;
    margin-bottom: 2px;
    h3 {
      margin: 0 5px;
      font-size: 13px;
    }
    svg {
      cursor: pointer;
      font-size: 16px;
    }
  }
  p {
    font-size: 10px;
  }
`;
const RemoveContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 45%;
  margin-right: 10px;
  div {
    display: flex;
    margin-bottom: 5px;
    cursor: pointer;
    p {
      font-size: 10px;
    }
    svg {
      font-size: 10px;
      margin-right: 5px;
    }
  }
`;
