import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import URL from "../../constants/url";
import LoadingPage from "../../assets/styles/LoadingPage";
import Header from "../../components/Header";
import StateCard from "./StateCard";

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
      <Title>Qual Estado você quer conhecer?</Title>
      <StatesContainer>
        {states.map((state, id) => (
          <StateCard props={state} />
        ))}
      </StatesContainer>
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
  margin-top: 20px;
  margin-bottom: 20px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;