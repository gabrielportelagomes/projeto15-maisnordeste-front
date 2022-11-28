import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "../../constants/url";
import LoadingButton from "../../assets/styles/LoadingButton";

function SignUpPage({ emailForm }) {
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

  useEffect(() => {
    if (emailForm.email === "") {
      navigate("/login");
    }
    setSignUpForm({ ...signUpForm, email: emailForm.email });
  }, []);

  function handleForm(event) {
    const { name, value } = event.target;
    if (name === "confirmPassword" && errorPassword === true) {
      setErrorPassword(false);
    }
    setSignUpForm({ ...signUpForm, [name]: value });
  }

  function cpfMask(e) {
    let newValue = e.target.value;
    newValue = newValue.replace(/\D/g, "");
    newValue = newValue.replace(/(\d{3})(\d)/, "$1.$2");
    newValue = newValue.replace(/(\d{3})(\d)/, "$1.$2");
    newValue = newValue.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = newValue;
    return e;
  }

  function birthDateMask(e) {
    let newValue = e.target.value;
    newValue = newValue.replace(/\D/g, "");
    newValue = newValue.replace(/(\d{2})(\d)/, "$1/$2");
    newValue = newValue.replace(/(\d{2})(\d)/, "$1/$2");
    e.target.value = newValue;
    return e;
  }

  function telephoneMask(e) {
    let newValue = e.target.value;
    newValue = newValue.replace(/\D/g, "");
    newValue = newValue.replace(/(\d{2})(\d)/, "($1) $2");
    newValue = newValue.replace(/(\d)(\d{4})$/, "$1-$2");
    e.target.value = newValue;
    return e;
  }

  function signUp(event) {
    event.preventDefault();
    setDisabledButton(true);

    if (signUpForm.password === signUpForm.confirmPassword) {
      const body = {
        email: signUpForm.email,
        cpf: signUpForm.cpf.replace(/[^\d]+/g, ""),
        name: signUpForm.name,
        surname: signUpForm.surname,
        birthDate: signUpForm.birthDate,
        telephone: signUpForm.telephone.replace(/[^\d]+/g, ""),
        password: signUpForm.password,
      };

      axios
        .post(`${URL}/sign-up`, body)
        .then(() => navigate("/login"))
        .catch((error) => {
          alert(error.response.data.message);
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
      {disabledButton ? (
        <BackButton>
          <MdArrowBackIos />
        </BackButton>
      ) : (
        <Link to="/login">
          <BackButton>
            <MdArrowBackIos />
          </BackButton>
        </Link>
      )}

      <Form onSubmit={signUp}>
        <h1>Quero criar uma conta</h1>
        <Label>E-mail:</Label>
        <Input
          name="email"
          value={emailForm.email}
          type="email"
          placeholder="Digite seu e-mail"
          disabled={true}
          readOnly
          required
        ></Input>
        <h2>Dados Pessoais</h2>
        <Label htmlFor="cpf">CPF:</Label>
        <Input
          name="cpf"
          id="cpf"
          value={signUpForm.cpf}
          onChange={(e) => handleForm(cpfMask(e))}
          type="text"
          placeholder="000.000.000-00"
          minLength="14"
          maxLength="14"
          disabled={disabledButton}
          required
        ></Input>
        <Label htmlFor="name">Nome:</Label>
        <Input
          name="name"
          id="name"
          value={signUpForm.name}
          onChange={handleForm}
          type="text"
          placeholder="Digite seu nome"
          disabled={disabledButton}
          required
        ></Input>
        <Label htmlFor="surname">Sobrenome:</Label>
        <Input
          name="surname"
          id="surname"
          value={signUpForm.surname}
          onChange={handleForm}
          type="text"
          placeholder="Digite seu sobrenome"
          disabled={disabledButton}
          required
        ></Input>
        <Label htmlFor="birthDate">Data de nascimento:</Label>
        <Input
          name="birthDate"
          id="birthDate"
          value={signUpForm.birthDate}
          onChange={(e) => handleForm(birthDateMask(e))}
          type="text"
          placeholder="DD/MM/AAAA"
          minLength="10"
          maxLength="10"
          disabled={disabledButton}
          required
        ></Input>
        <Label htmlFor="telephone">Telefone:</Label>
        <Input
          name="telephone"
          id="telephone"
          value={signUpForm.telephone}
          onChange={(e) => handleForm(telephoneMask(e))}
          type="text"
          placeholder="(00) 00000-00000"
          minLength="15"
          maxLength="15"
          disabled={disabledButton}
          required
        ></Input>
        <Label htmlFor="password">Senha (mínimo 6 caracteres):</Label>
        <Input
          name="password"
          id="password"
          value={signUpForm.password}
          onChange={handleForm}
          type="password"
          placeholder="Digite a senha"
          minLength="6"
          disabled={disabledButton}
          required
        ></Input>
        <Label htmlFor="confirmPassword">Repetir senha:</Label>
        <InputConfirm
          name="confirmPassword"
          id="confirmPassword"
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
        {disabledButton ? (
          <Button disabled={disabledButton}>
            <LoadingButton />
          </Button>
        ) : (
          <Button type="submit" disabled={disabledButton}>
            Criar conta
          </Button>
        )}
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
  h2 {
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    font-size: 20px;
    color: #ffbaba;
    margin-top: 30px;
  }
`;

const Label = styled.label`
  width: 100%;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 14px;
  color: #ffbaba;
  text-align: left;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 340px;
  height: 38px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #3003b2;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  margin-top: 50px;
  cursor: ${(props) => (props.disabled ? "cursor" : "pointer")};
`;
