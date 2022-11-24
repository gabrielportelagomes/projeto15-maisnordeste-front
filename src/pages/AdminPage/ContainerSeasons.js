import styled from "styled-components";

export default function ContainerSeasons() {
  return (
    <ContainerSeasonsStyled>
      <div className="high-season">
        <div className="description">
          Preço alta-estação{" "}
          <div className="low-description">
            (Natal, Carnaval, Páscoa e Revéillon)
          </div>
        </div>
        <input placeholder="R$" />
      </div>
      <div className="low-season">
        <div className="description">
          Preço baixa-estação
          <div className="low-description">(Maio-Junho, Setembro-Outubro)</div>
        </div>
        <input placeholder="R$" />
      </div>
    </ContainerSeasonsStyled>
  );
}

const ContainerSeasonsStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  .high-season,
  .low-season {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    input {
      width: 90px;
      height: 38px;
    }
  }
  .description {
    color: #ffbaba;
    font-size: 20px;
  }
  .low-description {
    color: #ffbaba;
    font-size: 10px;
  }
`;
