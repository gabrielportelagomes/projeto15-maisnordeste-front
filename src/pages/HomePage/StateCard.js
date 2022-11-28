import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function StateCard({ props }) {
  const { state, name, image } = props;
  const [isSelected, setIsSelected] = useState(false);

  function select() {
    setIsSelected(!isSelected);
  }

  useState(() => {}, [isSelected]);
  return (
    <StateCardStyle image={image} onClick={select} isSelected={isSelected}>
      {isSelected ? (
        <StateCardOpen>
          <h1>{name}</h1>
          <nav>
            <Link to={`/estados/${state}`}>
              <button>Visite!</button>
            </Link>
          </nav>
        </StateCardOpen>
      ) : (
        <>
          <h1>{name}</h1>
        </>
      )}
    </StateCardStyle>
  );
}

const StateCardStyle = styled.div`
  width: 340px;
  height: ${({ isSelected }) =>
    isSelected ? "200px" : "60px"}; //60px; // vai mudar pra 200px
  display: flex;
  /* align-items: flex-end; */
  border-radius: 10px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  box-shadow: 1px -1px 3px black;
  transition: all .5s;
  cursor: pointer;
  h1 {
    padding: 10px;
    font-size: 26px;
  }
`;

const StateCardOpen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  nav {
    display: flex;
    justify-content: center;
    color: white;
    height: 100%;
    align-items: center;

    button {
      background-color: #4ecb71;
      width: 150px;
      text-align: center;
      height: 35px;
      align-items: center;
      display: flex;
      padding: 0;
      justify-content: center;
      font-size: 20px;
      border-radius: 10px;
      margin-bottom: 30px;
      color: white;
      cursor: pointer;
      :hover {
        color: black;
      }
    }
  }
`;
