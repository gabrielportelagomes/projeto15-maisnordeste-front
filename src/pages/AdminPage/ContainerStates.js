import styled from "styled-components";
import { useState } from "react";
const states = ["MA", "PI", "CE", "RN", "PB", "PE", "AL", "SE", "BA"];

export default function ContainerStates({ setState }) {
  const [selectedInputs, setSelectedInputs] = useState(["MA"]);

  function handleInput(event) {
    if (event.target.checked) {
      setState(event.target.value);
      setSelectedInputs(event.target.value);
    }
  }

  return (
    <ContainerStatesStyled>
      {states.map((state, index) => (
        <label key={index}>
          {state}
          <input
            type="radio"
            value={state}
            onChange={handleInput}
            checked={selectedInputs.includes(state)}
          />
        </label>
      ))}
    </ContainerStatesStyled>
  );
}

const ContainerStatesStyled = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
  label {
    display: flex;
    flex-direction: column;
  }
`;
