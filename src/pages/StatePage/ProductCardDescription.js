import styled from "styled-components";
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
          <TagCardStyled key={tag}>{tag}</TagCardStyled>
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

  nav {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
    h3 {
      color: white;
    }

    button {
      margin-top: 20px;
      background-color: #4ecb71;
      height: 30px;
      color: white;
      cursor: pointer;
    }
  }
`;

const TagCardStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 12px;
  border-radius: 10px;
  height: 20px;
  margin-bottom: 10px;
  width: 100px;
  color: black;
`;
