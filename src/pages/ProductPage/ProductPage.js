import styled from "styled-components";
import Header from "../../components/Header";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "../../constants/url";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../../assets/styles/LoadingPage";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useUserData } from "../../providers/userData";
import { useAuth } from "../../providers/auth";

function ProductPage() {
  const navigate = useNavigate();
  const { idProduto } = useParams();
  const { userAuth } = useAuth();
  const { userData } = useUserData();
  const seasons = [
    { season: "Natal", seasonTag: "natal" },
    { season: "Carnaval", seasonTag: "carnaval" },
    { season: "Páscoa", seasonTag: "pascoa" },
    { season: "Réveillon", seasonTag: "reveillon" },
  ];
  const lowSeasons = [
    {
      season: "Baixa temporada 1",
      months: "Mai-Jun",
      seasonTag: "baixaTemporada1",
    },

    {
      season: "Baixa Temporada 2",
      months: "Set-Out",
      seasonTag: "baixaTemporada2",
    },
  ];
  const [product, setProduct] = useState();
  const [season, setSeason] = useState();
  const [seasonTag, setseasonTag] = useState();
  const [seasonValue, setSeasonValue] = useState();
  const [breakfast, setBreakfast] = useState(false);
  const [transport, setTransport] = useState(false);
  const [amount, setAmout] = useState(1);
  const [total, setTotal] = useState();
  const [showTotal, setShowTotal] = useState();
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    axios
      .get(`${URL}/product/${idProduto}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.log(error.response.data));
  }, []);

  useEffect(() => {
    if (seasonValue) {
      let value = amount * seasonValue;
      if (breakfast) {
        value += amount * product.prices.cafe;
      }
      if (transport) {
        value += amount * product.prices.translado;
      }
      setTotal(value);
      let newValue = `${value}`;
      newValue = newValue.replace(/\D/g, "");
      newValue = newValue.replace(/(\d)(\d{2})$/, "$1,$2");
      newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
      setShowTotal(newValue);
    }
  }, [seasonValue, breakfast, transport, amount]);

  function increaseAmount() {
    if (!seasonTag) {
      alert("Selecione uma temporada!");
      return;
    }

    const stock = product.stock[seasonTag];
    if (amount < stock) {
      setAmout(amount + 1);
    } else {
      alert("Quantidade limite atingida!");
    }
  }

  function decreaseAmount() {
    if (amount > 1) {
      setAmout(amount - 1);
    }
  }

  function addToCart() {
    const body = {
      user: userData._id,
      subtotal: total,
      idProduct: idProduto,
      title: product.title,
      image: product.image,
      state: product.state,
      season: season,
      seasonTag: seasonTag,
      amount: amount,
      breakfast: breakfast,
      transport: transport,
    };

    axios
      .post(`${URL}/cart`, body, {
        headers: {
          Authorization: `Bearer ${userAuth.token}`,
        },
      })
      .then(() => navigate("/carrinho"))
      .catch((error) => console.log(error.response.data));
  }

  if (!product) {
    return (
      <PageContainer>
        <LoadingPage />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      <ProductOverview image={product.image}>
        <Locality>{product.title}</Locality>
        <DescriptionContainer>
          <Description>{product.description}</Description>
          <Tags>
            {product.tags.map((tag, id) => (
              <Tag key={id}>
                <p>{tag}</p>
              </Tag>
            ))}
          </Tags>
        </DescriptionContainer>
      </ProductOverview>
      <OptionsContainer>
        <SeasonsTitle>Selecione uma temporada</SeasonsTitle>
        <Seasons>
          {seasons.map((s, id) => (
            <Season
              onClick={() => {
                setSeason(s.season);
                setseasonTag(s.seasonTag);
                setSeasonValue(product.prices.altaTemporada);
                setAmout(1);
                setDisableButton(false);
              }}
              color={season === s.season ? "#4ECB71" : "#ff9632"}
              key={id}
            >
              {s.season}
            </Season>
          ))}
          {lowSeasons.map((s, id) => (
            <Season
              onClick={() => {
                setSeason(s.season);
                setseasonTag(s.seasonTag);
                setSeasonValue(product.prices.baixaTemporada);
                setAmout(1);
                setDisableButton(false);
              }}
              color={season === s.season ? "#4ECB71" : "#ff9632"}
              key={id}
            >
              {s.season}
              <p>{s.months}</p>
            </Season>
          ))}
        </Seasons>
        <AdditionalContainer>
          <h2>Adicionais (opcional) :</h2>
          <Additional>
            <p>Café da manhã</p>
            <CheckBreakfast
              onClick={() => {
                setBreakfast(!breakfast);
              }}
              color={breakfast ? "#4ECB71" : "#ffffff"}
            >
              <BsFillCheckCircleFill />
            </CheckBreakfast>
          </Additional>
          <Additional>
            <p>Translado</p>
            <CheckTransport
              onClick={() => {
                setTransport(!transport);
              }}
              color={transport ? "#4ECB71" : "#ffffff"}
            >
              <BsFillCheckCircleFill />
            </CheckTransport>
          </Additional>
        </AdditionalContainer>
        <AmountTitle>Quantidade:</AmountTitle>
        <AmountContainer>
          <Icon onClick={decreaseAmount}>
            <HiMinusCircle />
          </Icon>
          <Amount>{amount}</Amount>
          <Icon onClick={increaseAmount}>
            <HiPlusCircle />
          </Icon>
        </AmountContainer>
      </OptionsContainer>
      <Footer>
        <p>Total: R$ {showTotal}</p>
        {!userData ? (
          <Link to={"/login"}>
            <LoginButton>Faça o login</LoginButton>
          </Link>
        ) : disableButton ? (
          <AddButton disabled={disableButton}>Adicionar</AddButton>
        ) : (
          <AddButton disabled={disableButton} onClick={addToCart}>
            Adicionar
          </AddButton>
        )}
      </Footer>
    </PageContainer>
  );
}

export default ProductPage;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductOverview = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  z-index: -1;
`;

const Locality = styled.h1`
  width: 340px;
  margin-top: 110px;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 28px;
  color: #ffffff;
`;

const DescriptionContainer = styled.div`
  width: 340px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 5px;
  background-color: rgba(255, 255, 255, 0.4);
`;

const Description = styled.h3`
  width: 310px;
  margin-top: 10px;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  text-align: justify;
`;

const Tags = styled.div`
  width: 310px;
  height: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  margin-left: 10px;
  p {
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    font-size: 15px;
    color: #000000;
    margin: 5px;
  }
`;

const OptionsContainer = styled.div`
  width: 340px;
  overflow-y: auto;
  margin-top: 260px;
  margin-bottom: 90px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SeasonsTitle = styled.h2`
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const Seasons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Season = styled.div`
  width: 150px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  text-align: center;
  margin: 10px 10px;
  p {
    font-size: 10px;
    margin-top: 5px;
  }
`;

const AdditionalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  color: #ffffff;
  h2 {
    width: 100%;
    font-size: 24px;
    color: #ffffff;
  }
`;

const Additional = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  p {
    font-size: 20px;
  }
`;

const CheckBreakfast = styled.div`
  font-size: 24px;
  color: ${(props) => props.color};
`;

const CheckTransport = styled.div`
  font-size: 24px;
  color: ${(props) => props.color};
`;

const AmountTitle = styled.p`
  width: 340px;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  margin-top: 20px;
`;

const AmountContainer = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 180px;
  background-color: #ffffff;
`;

const Icon = styled.p`
  font-size: 40px;
  color: #000000;
`;

const Amount = styled.p`
  width: 40px;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 26px;
  color: #000000;
  text-align: center;
  margin: 0 20px;
`;

const Footer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  p {
    font-family: "Comfortaa", cursive;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    margin-left: 20px;
  }
`;

const LoginButton = styled.button`
  width: 110px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d52b2b;
  margin-right: 20px;
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
`;

const AddButton = styled.button`
  width: 110px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.disabled ? "#d9d9d9" : "#4ECB71")};
  margin-right: 20px;
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
`;
