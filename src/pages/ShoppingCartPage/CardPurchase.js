import styled from "styled-components";
import CardPurchaseStyle from "./CardPurchaseStyle";
import { BsFillCheckCircleFill as CheckIcon } from "react-icons/bs";
import { BsFillXCircleFill as CloseIcon } from "react-icons/bs";
import { BsCalendarCheck as CalendarIcon } from "react-icons/bs";
import { IoIosRemoveCircleOutline as MinusIcon } from "react-icons/io";
import { IoIosAddCircleOutline as PlusIcon } from "react-icons/io";
import { BsFillTrashFill as TrashIcon } from "react-icons/bs";

export default function CardPurchase() {
  return (
    <CardPurchaseStyle>
      <Top>Maragogi</Top>
      <Middle>
        <img src="https://i.imgur.com/vLme3wah.jpg" alt="foto" />
        <PurchaseSummary>
          <header>Resumo da compra</header>
          <li>
            <CalendarIcon color="darkblue" />
            Quando? Mai-Jun
          </li>
          <li>
            <CheckIcon color="green" />
            Café da manhã
          </li>
          <li>
            <CloseIcon color="red" />
            Translado
          </li>
          <h3>R$ 1.600,00</h3>
        </PurchaseSummary>
      </Middle>
      <Bottom>
        <AmountContainer>
          <div>
            <MinusIcon />
            <h3>1</h3>
            <PlusIcon />
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
  margin-top: 10px;
  div {
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 25px;
    border-radius: 10px;
    margin-bottom: 5px;
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
