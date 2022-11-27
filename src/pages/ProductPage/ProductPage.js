import styled from "styled-components";
import Header from "../../components/Header";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "../../constants/url";
import { useParams } from "react-router-dom";
import LoadingPage from "../../assets/styles/LoadingPage";
import { BsFillCheckCircleFill } from "react-icons/bs";

function ProductPage() {
  const { idProduto } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios
      .get(`${URL}/product/${idProduto}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.log(error.response.data));
  }, []);

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
      <SeasonsTitle>Selecione uma temporada</SeasonsTitle>
      <Seasons>
        <Season color="#ff9632">Natal</Season>
        <Season color="#ff9632">Carnaval</Season>
        <Season color="#ff9632">Páscoa</Season>
        <Season color="#ff9632">Réveillon</Season>
        <Season color="#5bdec3">
          Baixa Temporada 1 <p>Maio-Junho</p>
        </Season>
        <Season color="#5bdec3">
          Baixa Temporada 2 <p>Setembro-Outubro</p>
        </Season>
      </Seasons>
      <AdditionalContainer>
        <h1>Adicionais (opcional) :</h1>
        <Additional>
          <p>Café da manhã</p>
          <CheckIcon>
            <BsFillCheckCircleFill />
          </CheckIcon>
        </Additional>
        <Additional>
          <p>Translado</p>
          <CheckIcon>
            <BsFillCheckCircleFill />
          </CheckIcon>
        </Additional>
      </AdditionalContainer>
      <AmountTitle>Quantidade:</AmountTitle>
      <AmountContainer>
        <Icon>
          <HiMinusCircle />
        </Icon>
        <Amount>0</Amount>
        <Icon>
          <HiPlusCircle />
        </Icon>
      </AmountContainer>
      <Footer>
        <p>Total: R$ </p>
        <AddButton>Adicionar</AddButton>
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

const SeasonsTitle = styled.h1`
  margin-top: 260px;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 28px;
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
  margin: 10px 20px;
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
  h1 {
    width: 100%;
    font-size: 28px;
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

const CheckIcon = styled.div`
  font-size: 24px;
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

const AddButton = styled.button`
  width: 110px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  margin-right: 20px;
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
`;
