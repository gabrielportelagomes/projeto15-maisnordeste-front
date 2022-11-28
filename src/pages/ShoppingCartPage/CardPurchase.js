import styled from "styled-components";
import { useEffect, useState } from "react";
import CardPurchaseStyle from "./CardPurchaseStyle";
import { BsFillCheckCircleFill as CheckIcon } from "react-icons/bs";
import { BsFillXCircleFill as CloseIcon } from "react-icons/bs";
import { BsCalendarCheck as CalendarIcon } from "react-icons/bs";
import { IoIosRemoveCircleOutline as MinusIcon } from "react-icons/io";
import { IoIosAddCircleOutline as PlusIcon } from "react-icons/io";
import { BsFillTrashFill as TrashIcon } from "react-icons/bs";
import { useCartData } from "../../providers/cartData";
import axios from "axios";
import URL from "../../constants/url";
import { useAuth } from "../../providers/auth";

export default function CardPurchase({ purchase }) {
  const { userAuth } = useAuth();
  const {
    _id,
    user,
    subtotal,
    seasonTag,
    title,
    image,
    state,
    season,
    amount,
    breakfast,
    transport,
    idProduct,
  } = purchase;
  const id = _id;
  const pricePerUnity = subtotal / amount;
  const [updatedMessage, setUpdatedMessage] = useState("Alterar quantidade");
  const [product, setProduct] = useState();
  
  useEffect(() => {
    axios
      .get(`${URL}/product/${idProduct}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.log(error.response.data));
  }, [updatedMessage]);

  function increaseAmount() {
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth.token}`,
      },
    };
    const stock = product.stock[seasonTag];
    if (amount < stock) {
      const newAmount = amount + 1;
      const newSubtotal = newAmount * pricePerUnity;
      const body = { amount: newAmount, subtotal: newSubtotal };
      const promise = axios.put(`${URL}/cart/${id}`, body, config);
      promise.then(() => {
        setUpdatedMessage("Alterar quantidade");
        window.location.reload();
      });
      promise.catch((error) => console.log(error.response.data));
    } else {
      setUpdatedMessage("Limite máximo atingido");
    }
  }

  function decreaseAmount() {
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth.token}`,
      },
    };
    const newAmount = amount - 1;
    const newSubtotal = newAmount * pricePerUnity;
    const body = { amount: newAmount, subtotal: newSubtotal };
    if (amount > 1) {
      const promise = axios.put(`${URL}/cart/${id}`, body, config);
      promise.then(() => {
        setUpdatedMessage("Alterar quantidade");
        window.location.reload();
      });
      promise.catch((error) => console.log(error.response.data));
    }
  }

  function deleteProduct() {
    const answer = window.confirm("Você quer mesmo remover do carrinho?");
    if (answer) {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth.token}`,
        },
      };
      const promise = axios.delete(`${URL}/cart/${id}`, config);
      promise.then(() => {
        window.location.reload();
      });
      promise.catch((err) => console.log(err.response.data));
    }
  }

  function formatValue(value) {
    let newValue = `${value}`;
    newValue = newValue.replace(/\D/g, "");
    newValue = newValue.replace(/(\d)(\d{2})$/, "$1,$2");
    newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
    return newValue;
  }

  return (
    <CardPurchaseStyle>
      <Top>
        {title} - {state}
      </Top>
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
          <h3>Valor: R$ {formatValue(subtotal)}</h3>
        </PurchaseSummary>
      </Middle>
      <Bottom>
        <AmountContainer>
          <div>
            <MinusIcon onClick={decreaseAmount} />
            <h3>{amount}</h3>
            <PlusIcon onClick={increaseAmount} />
          </div>
          <p>{updatedMessage}</p>
        </AmountContainer>
        <RemoveContainer>
          <div onClick={deleteProduct}>
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
