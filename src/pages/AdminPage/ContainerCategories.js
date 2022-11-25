import { useState } from "react";
import styled from "styled-components";

const categories = [
  "Praia",
  "Serra",
  "Festas",
  "História",
  "Gastronomia",
  "Lagoas e rios",
  "Aventura",
];

export default function ContainerCategories({
  setSelectedCategories,
  selectedCategories,
}) {
  function handleInput(event) {
    const category = event.target.value;

    if (!selectedCategories.includes(category)) {
      const selected = [...selectedCategories, category];
      setSelectedCategories(selected);
    } else if (selectedCategories.includes(category)) {
      const selected = selectedCategories.filter((s) => s !== category);
      setSelectedCategories(selected);
    }
  }

  return (
    <ContainerCategoriesStyled>
      {categories.map((category, index) => (
        <label key={index}>
          <input type="checkbox" value={category} onChange={handleInput} />
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
  margin-bottom: 10px;
  label {
    display: flex;
    align-items: baseline;
  }
`;
