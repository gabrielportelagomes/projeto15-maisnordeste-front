import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import URL from "../../constants/url";
import LoadingPage from "../../assets/styles/LoadingPage";
import Header from "../../components/Header";

function ActivitiesPage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/activities`)
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }, []);

  if (activities.length === 0) {
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
      <ActivitiesContainer>
        {activities.map((activity, id) => (
          <Link key={id} to={`/atividades/${activity.tag}`}>
            <Activity
              key={id}
              activityImage={activity.image}
              id={activity.sttagate}
            >
              <p>{activity.name}</p>
            </Activity>
          </Link>
        ))}
      </ActivitiesContainer>
      <ButtonContainer>
        <Link to="/">
          <StatesButton>Busque por estado</StatesButton>
        </Link>
      </ButtonContainer>
    </PageContainer>
  );
}

export default ActivitiesPage;

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

const ActivitiesContainer = styled.div`
  width: 340px;
  margin-top: 30px;
  margin-bottom: 70px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;

const Activity = styled.div`
  width: 340px;
  height: 60px;
  display: flex;
  align-items: flex-end;
  border-radius: 5px;
  background-color: aliceblue;
  background-image: url(${(props) => props.activityImage});
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

const StatesButton = styled.button`
  width: 230px;
  height: 35px;
  background-color: #3003b2;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;
