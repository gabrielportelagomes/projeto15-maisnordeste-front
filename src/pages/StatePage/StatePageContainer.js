import styled from "styled-components";

const StatePageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
  h1 {
    margin-top: 20px;
    display: flex;
    font-size: 28px;
    justify-content: flex-start;
    width: 330px;
  }
`;
export default StatePageContainer;
