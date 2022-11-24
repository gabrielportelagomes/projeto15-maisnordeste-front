import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import URL from "../../constants/url";

function SignUpPage() {
  const navigate = useNavigate();
  const [disabledButton, setDisabledButton] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    cpf: "",
    name: "",
    surname: "",
    birthDate: "",
    telephone: "",
    password: "",
  });

  function handleForm(event) {
    const { name, value } = event.target;
    if (name === "confirmPassword" && errorPassword === true) {
      setErrorPassword(false);
    }
    setSignUpForm({ ...signUpForm, [name]: value });
  }

  function signUp(event) {
    event.preventDefault();
    setDisabledButton(true);

    if (signUpForm.password === signUpForm.confirmPassword) {
      const body = {
        email: signUpForm.email,
        cpf: signUpForm.cpf,
        name: signUpForm.name,
        surname: signUpForm.surname,
        birthDate: signUpForm.birthDate,
        telephone: signUpForm.telephone,
        password: signUpForm.password,
      };
      axios
        .post(`${URL}/sign-up`, body)
        .then(() => navigate("/"))
        .catch((error) => {
          alert(error.response.data);
          setDisabledButton(false);
        });
    } else {
      setErrorPassword(true);
      setDisabledButton(false);
    }
  }

  return (
    <PageContainer>
      <Logo />
      <BackButton>
        <MdArrowBackIos />
      </BackButton>
      <Form onSubmit={signUp}>
        <h1>Quero criar uma conta</h1>
        <Label>E-mail:</Label>
        <Input
          name="email"
          value={signUpForm.email}
          onChange={handleForm}
          type="text"
          placeholder="Digite seu e-mail"
          disabled={disabledButton}
          required
        ></Input>
        <p>Dados Pessoais</p>
        <Label htmlFor="cpf">CPF:</Label>
        <Input
          name="cpf"
          value={signUpForm.cpf}
          onChange={handleForm}
          type="text"
          placeholder="___.___.___.-__"
          minLength="11"
          maxLength="11"
          disabled={disabledButton}
          required
        ></Input>
        <Label>Nome:</Label>
        <Input
          name="name"
          value={signUpForm.name}
          onChange={handleForm}
          type="text"
          placeholder="Digite seu nome"
          disabled={disabledButton}
          required
        ></Input>
        <Label>Sobrenome:</Label>
        <Input
          name="surname"
          value={signUpForm.surname}
          onChange={handleForm}
          type="text"
          placeholder="Digite seu sobrenome"
          disabled={disabledButton}
          required
        ></Input>
        <Label>Data de nascimento:</Label>
        <Input
          name="birthDate"
          value={signUpForm.birthDate}
          onChange={handleForm}
          type="text"
          placeholder="DD/MM/AAAA"
          minLength="10"
          maxLength="10"
          disabled={disabledButton}
          required
        ></Input>
        <Label>Telefone:</Label>
        <Input
          name="telephone"
          value={signUpForm.telephone}
          onChange={handleForm}
          type="text"
          placeholder="Digite seu telefone"
          minLength="11"
          maxLength="11"
          disabled={disabledButton}
          required
        ></Input>
        <Label>Senha (mínimo 6 caracteres):</Label>
        <Input
          name="password"
          value={signUpForm.password}
          onChange={handleForm}
          type="password"
          placeholder="Digite a senha"
          minLength="6"
          disabled={disabledButton}
          required
        ></Input>
        <Label>Repetir senha:</Label>
        <InputConfirm
          name="confirmPassword"
          value={signUpForm.confirmPassword}
          onChange={handleForm}
          type="password"
          placeholder="Confirme a senha"
          minLength="6"
          disabled={disabledButton}
          errorPassword={errorPassword}
          required
        ></InputConfirm>
        {errorPassword && (
          <ErrorPassword>As senhas não conferem!</ErrorPassword>
        )}
        <Button type="submit" disabled={disabledButton}>
          Criar conta
        </Button>
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
  border: none;
  background-color: #ffffff;
  padding: 15px;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
    -webkit-text-fill-color: #000000 !important;
  }
`;

const InputConfirm = styled(Input)`
  border: ${(props) => (props.errorPassword ? "3px solid red" : "none")};
`;

const ErrorPassword = styled.span`
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 13px;
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
  cursor: ${(props) => (props.disabled ? "cursor" : "pointer")};
`;
