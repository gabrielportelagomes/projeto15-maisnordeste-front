import styled from "styled-components";

const categories = [
  "Praia",
  "Serra",
  "Festas",
  "Historia",
  "Gastronomia",
  "Lagoas e rios",
  "Aventura",
];

export default function ContainerCategories() {
  return (
    <ContainerCategoriesStyled>
      {categories.map((category) => (
        <label>
          <input type="checkbox" />
          {category}
        </label>
      ))}
    </ContainerCategoriesStyled>
  );
}

const ContainerCategoriesStyled = styled.section`
  display: grid;
  flex-wrap: wrap;
  width: 100%;
  grid-template-columns: auto auto auto;
  label {
    display: flex;
    align-items: center;
  }
`;
