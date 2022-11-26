import styled from "styled-components";

export default function TagsContainer(props) {
  return <TagContainerStyled>{props.children}</TagContainerStyled>;
}

const TagContainerStyled = styled.nav`
  margin: 20px 10px;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  line-height: 10px;
  gap: 15px;
  justify-content: center;
`;
