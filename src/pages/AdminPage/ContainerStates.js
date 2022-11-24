import styled from "styled-components";

const states = ["MA", "PI", "CE", "RN", "PB", "PE", "AL", "SE", "BA"];

export default function ContainerStates() {
  return (
    <ContainerStatesStyled>
      {states.map((state) => (
        <label>
          {state}
          <input type="radio" />
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
