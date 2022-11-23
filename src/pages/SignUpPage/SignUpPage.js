import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import Logo from "../../components/Logo";

function SignUpPage() {
  return (
    <PageContainer>
      <Logo />
      <BackButton>
        <MdArrowBackIos />
      </BackButton>
      <Form>
        <h1>Quero criar uma conta</h1>
        <Label>E-mail:</Label>
        <Input></Input>
        <p>Dados Pessoais</p>
        <Label>CPF:</Label>
        <Input></Input>
        <Label>Nome:</Label>
        <Input></Input>
        <Label>Sobrenome:</Label>
        <Input></Input>
        <Label>Data de nascimento:</Label>
        <Input></Input>
        <Label>Senha:</Label>
        <Input></Input>
        <Label>Repetir senha:</Label>
        <Input></Input>
        <Button>Criar conta</Button>
      </Form>
    </PageContainer>
  );
}

export default SignUpPage;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButton = styled.div`
  position: absolute;
  font-size: 30px;
  color: #ffffff;
  top: 20px;
  right: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
  h1 {
    width: 340px;
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    font-size: 24px;
    color: #ffffff;
    text-align: left;
    margin-bottom: 20px;
  }
  p {
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    font-size: 20px;
    color: #ffbaba;
    margin: 10px 0;
  }
`;

const Label = styled.label`
  width: 100%;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 14px;
  color: #ffbaba;
  text-align: left;
`;

const Input = styled.input`
  width: 340px;
  height: 38px;
  border-radius: 5px;
  margin: 5px 0;
`;

const Button = styled.button`
  width: 230px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #3003b2;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  margin-top: 50px;
`;
