import styled from "styled-components";

function ScreenContainer(props) {
  return <Screen>{props.children}</Screen>;
}

export default ScreenContainer;

const Screen = styled.main`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  position: relative;
`;
