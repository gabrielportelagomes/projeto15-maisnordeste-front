import styled from "styled-components";

const StatePageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  &::-webkit-scrollbar {
    display: none;
  }
  h1 {
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
`;
export default StatePageContainer;
