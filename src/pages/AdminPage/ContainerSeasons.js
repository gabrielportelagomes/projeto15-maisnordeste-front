import styled from "styled-components";

export default function ContainerSeasons() {
  return (
    <ContainerSeasonsStyled>
      <div className="high-season">
        <div className="description">Preço alta-estação</div>
        <input />
      </div>
      <div className="low-season">
        <div className="description">Preço baixa-estação</div>
        <input />
      </div>
    </ContainerSeasonsStyled>
  );
}

const ContainerSeasonsStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  .high-season,
  .low-season {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
