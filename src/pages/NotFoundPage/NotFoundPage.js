import Header from "../../components/Header";
import styled from "styled-components";
import { BiCommentError as ErrorIcon } from "react-icons/bi";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <PageContainer>
        <Header />
        <section>
          <ErrorIcon />
          <h1>Página não encontrada</h1>
          <Link to="/">
            <button>Página inicial</button>
          </Link>
        </section>
      </PageContainer>
    </>
  );
}

export default NotFoundPage;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    svg {
      color: white;
      font-size: 250px;
      width: 100%;
      text-align: center;
    }
    button {
      height: 40px;
      width: 283px;
      margin-top: 40px;
      background-color: #3003b2;
      font-size: 16px;
      color: white;
      cursor: pointer;
    }
  }
`;
