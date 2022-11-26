import styled from "styled-components";
import { TagCardStyle } from "./TagCard";
import { useNavigate } from "react-router-dom";

export default function ProductCardDescription({
  tags,
  description,
  idProduto,
}) {
  const navigate = useNavigate();

  function comprar() {
    navigate(`/produtos/${idProduto}`);
  }

  return (
    <ProductCardDescriptionStyle>
      <ul>
        {tags.map((tag) => (
          <TagCardStyle key={tag}>{tag}</TagCardStyle>
        ))}
      </ul>
      <nav>
        <h3>{description}</h3>
        <button onClick={comprar}>Comprar</button>
      </nav>
    </ProductCardDescriptionStyle>
  );
}

const ProductCardDescriptionStyle = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  flex-direction: row;

  ul {
    li {
      width: 100px;
      margin-bottom: 10px;
      background-color: white;
      opacity: 100%;
    }
  }
  nav {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;

    button {
      margin-top: 20px;
      background-color: #4ecb71;
      color: white;
      cursor: pointer;
    }
  }
`;
