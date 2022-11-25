import styled from "styled-components";

export default function ContainerSeasons({
  setSelectedSeasons,
  selectedSeasons,
}) {
  function convertValue(event) {
    let newValue = event.target.value;
    newValue = newValue.replace(/\D/g, "");
    newValue = newValue.replace(/(\d)(\d{2})$/, "$1,$2");
    newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
    event.target.value = newValue;
    return event;
  }

  function handleForm(event) {
    const { name, value } = event.target;
    setSelectedSeasons({ ...selectedSeasons, [name]: value });
  }

  return (
    <ContainerSeasonsStyled>
      <div className="high-season">
        <div className="top-description">
          Preço alta temporada
          <div className="bottom-description">
            (Natal, Carnaval, Páscoa e Revéillon)
          </div>
        </div>
        <input
          onChange={(event) => handleForm(convertValue(event))}
          name="altaTemporada"
          value={"R$ " + selectedSeasons.altaTemporada}
          required
        />
      </div>
      <div className="low-season">
        <div className="top-description">
          Preço baixa temporada
          <div className="bottom-description">
            (Maio-Junho, Setembro-Outubro)
          </div>
        </div>
        <input
          onChange={(event) => handleForm(convertValue(event))}
          name="baixaTemporada"
          value={"R$ " + selectedSeasons.baixaTemporada}
          required
        />
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
      width: 100px;
      height: 38px;
    }
  }
  .top-description {
    color: #ffbaba;
    font-size: 20px;
  }
  .bottom-description {
    color: #ffbaba;
    font-size: 10px;
  }
`;
