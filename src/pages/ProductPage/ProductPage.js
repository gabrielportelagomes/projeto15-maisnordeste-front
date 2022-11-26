import styled from "styled-components";
import Header from "../../components/Header";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

function ProductPage() {
  return (
    <PageContainer>
      <Header />
      <ProductOverview>
        <Locality>Pico do Cabugi - RN</Locality>
        <DescriptionContainer>
          <Description>
            Maior montanha de origem vulcânica do RN. Acampar lá em cima é uma
            experiência inesquecível!
          </Description>
          <Tags>
            <Tag>
              <p>Serra</p>
            </Tag>
            <Tag>
              <p>Aventura</p>
            </Tag>
          </Tags>
        </DescriptionContainer>
      </ProductOverview>
      <SeasonsTitle>Selecione uma temporada</SeasonsTitle>
      <Seasons>
        <Season color="#ff9632">
          Natal
          <p>22/12 a 27/12</p>
        </Season>
        <Season color="#ff9632">
          Carnaval
          <p>22/12 a 27/12</p>
        </Season>
        <Season color="#ff9632">
          Páscoa
          <p>22/12 a 27/12</p>
        </Season>
        <Season color="#ff9632">
          Réveillon
          <p>22/12 a 27/12</p>
        </Season>
        <Season color="#5bdec3">Baixa Temporada 1</Season>
        <Season color="#5bdec3">Baixa Temporada 2</Season>
      </Seasons>
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
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-image: url("https://i.imgur.com/6QbZ0T0.jpg");
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
  height: 200px;
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
  margin-top: 320px;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 30px;
`;

const Seasons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Season = styled.div`
  width: 150px;
  height: 50px;
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
  margin: 20px;
  p {
    font-size: 10px;
    margin-top: 5px;
  }
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
