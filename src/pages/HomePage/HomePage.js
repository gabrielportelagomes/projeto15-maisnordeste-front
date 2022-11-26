import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import URL from "../../constants/url";
import LoadingPage from "../../assets/styles/LoadingPage";
import Header from "../../components/Header";

function HomePage() {
  const [states, setStates] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/states`)
      .then((response) => {
        setStates(response.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }, []);

  if (states.length === 0) {
    return (
      <PageContainer>
        <LoadingPage />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      <Title>Qual Nordeste você quer conhecer?</Title>
      <StatesContainer>
        {states.map((state, id) => (
          <Link key={id} to={`/estados/${state.state}`}>
            <State key={id} stateImage={state.image} id={state.state}>
              <p>{state.name}</p>
            </State>
          </Link>
        ))}
      </StatesContainer>
      <ButtonContainer>
        <Link to="/atividades">
          <ActivitiesButton>Busque por atividade</ActivitiesButton>
        </Link>
      </ButtonContainer>
    </PageContainer>
  );
}

export default HomePage;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  width: 340px;
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
`;

const StatesContainer = styled.div`
  width: 340px;
  margin-top: 30px;
  margin-bottom: 70px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const State = styled.div`
  width: 340px;
  height: 60px;
  display: flex;
  align-items: flex-end;
  border-radius: 5px;
  background-color: aliceblue;
  background-image: url(${(props) => props.stateImage});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  p {
    font-family: "Comfortaa", cursive;
    font-weight: 700;
    font-size: 28px;
    color: #ffffff;
    margin: 5px;
  }
  &:hover {
    height: 200px;
    transition: 500ms;
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 30px;
`;

const ActivitiesButton = styled.button`
  width: 230px;
  height: 35px;
  background-color: #3003b2;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;
