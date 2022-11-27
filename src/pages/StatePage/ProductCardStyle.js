import styled from "styled-components";

const ProductCardStyle = styled.section`
  display: flex;
  align-items: flex-end;
  width: 330px;
  height: 200px;
  border-radius: 10px;
  background-color: white;
  background-image: url(${({ image }) => image});
  background-size: cover;
  margin-bottom: 30px;
  position: relative;
  cursor: pointer;
  div {
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? "200px" : "40px")};
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: ${({ isOpen }) => (isOpen ? "10px" : "0 0 10px 10px")};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 0.2s;
    padding: 10px;
    div {
      display: flex;
      background-color: rgba(0, 0, 0, 0);
      flex-direction: row;
    }
  }
  h2 {
    color: black;
  }
`;

export default ProductCardStyle;
