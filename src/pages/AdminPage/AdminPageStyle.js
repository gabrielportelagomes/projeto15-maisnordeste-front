import styled from "styled-components";

const AdminPageStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .container-states {
    display: flex;
  }
  textarea {
    resize: none;
    width: 283px;
    height: 80px;
    border-radius: 5px;
    border: none;
    padding: 10px;
    margin-bottom: 10px;
    ::placeholder {
      font-family: "Comfortaa";
      font-size: 16px;
    }
  }
  input[type="checkbox"] {
    margin-bottom: 10px;
  }
  input[type="text"],
  input[type="url"] {
    width: 283px;
    height: 40px;
    margin-bottom: 10px;
    padding: 10px;
    ::placeholder {
      font-size: 16px;
    }
  }
  label {
    font-size: 16px;
  }
  h1 {
    margin: 10px auto;
  }
  h2 {
    margin: 10px auto;
  }
  button {
    height: 40px;
    width: 283px;
    margin: 10px auto;
    background-color: #3003b2;
    font-size: 16px;
    color: white;
  }
`;

export default AdminPageStyle;
