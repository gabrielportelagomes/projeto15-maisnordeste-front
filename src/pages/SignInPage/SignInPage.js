import styled from "styled-components";
import { MdArrowBackIos, MdLogin } from "react-icons/md";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import URL from "../../constants/url";
import LoadingButton from "../../assets/styles/LoadingButton";
import { useAuth } from "../../providers/auth";

function SignInPage({ emailForm, setEmailForm }) {
  const navigate = useNavigate();
  const { setUserAuth } = useAuth();
  const [disabledButton, setDisabledButton] = useState(false);
  const [disabledSignInButton, setDisabledSignInButton] = useState(false);
  const [disabledSignUpButton, setDisabledSignUpButton] = useState(false);
  const [errorEmailSignUp, setErrorEmailSignUp] = useState(false);
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(event) {
    const { name, value } = event.target;
    setSignInForm({ ...signInForm, [name]: value });
  }

  function signIn(event) {
    event.preventDefault();
    setDisabledButton(true);
    setDisabledSignInButton(true);
    const body = {
      email: signInForm.email,
      password: signInForm.password,
    };
    axios
      .post(`${URL}/sign-in`, body)
      .then((response) => {
        setUserAuth(response.data);
        localStorage.setItem(
          "userAuthMaisNordeste",
          JSON.stringify(response.data)
        );
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
        setDisabledButton(false);
        setDisabledSignInButton(false);
      });
  }

  function handleEmailForm(event) {
    if (errorEmailSignUp === true) {
      setErrorEmailSignUp(false);
    }
    const { name, value } = event.target;
    setEmailForm({ ...emailForm, [name]: value });
  }

  function checkEmail(event) {
    event.preventDefault();
    setDisabledButton(true);
    setDisabledSignUpButton(true);
    const email = emailForm.email;

    axios
      .get(`${URL}/users/${email}`)
      .then(() => navigate("/cadastro"))
      .catch((error) => {
        alert(error.response.data.message);
        setDisabledButton(false);
        setDisabledSignUpButton(false);
        if (error.response.data.message === "E-mail já cadastrado.") {
          setErrorEmailSignUp(true);
        }
      });
  }

  return (
    <PageContainer>
      <Logo />
      <BackButton>
        <MdArrowBackIos />
      </BackButton>
      <Form onSubmit={signIn}>
        <h1>Fazer login</h1>
        <Label>E-mail:</Label>
        <Input
          name="email"
          value={signInForm.email}
          onChange={handleForm}
          type="email"
          placeholder="Digite seu e-mail"
          disabled={disabledButton}
          required
        ></Input>
        <Label>Senha:</Label>
        <Input
          name="password"
          value={signInForm.password}
          onChange={handleForm}
          type="password"
          placeholder="Digite a senha"
          disabled={disabledButton}
          required
        ></Input>
        {disabledSignInButton ? (
          <Button disabled={disabledButton}>
            <LoadingButton />
          </Button>
        ) : (
          <Button type="submit" disabled={disabledButton}>
            <LoginIcon>
              <MdLogin />
            </LoginIcon>
            Entrar
          </Button>
        )}
      </Form>
      <Form onSubmit={checkEmail}>
        <h1>Quero criar uma conta</h1>
        <Label>E-mail:</Label>
        <InputSignUp
          name="email"
          value={emailForm.email}
          onChange={handleEmailForm}
          type="email"
          placeholder="Digite seu melhor e-mail"
          disabled={disabledButton}
          errorEmailSignUp={errorEmailSignUp}
          required
        ></InputSignUp>
        {errorEmailSignUp && (
          <ErrorEmail>Faça o login ou cadastre-se com outro e-mail.</ErrorEmail>
        )}
        {disabledSignUpButton ? (
          <Button disabled={disabledButton}>
            <LoadingButton />
          </Button>
        ) : (
          <Button type="submit" disabled={disabledButton}>
            Continuar
          </Button>
        )}
      </Form>
    </PageContainer>
  );
}

export default SignInPage;

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

const InputSignUp = styled(Input)`
  border: ${(props) => (props.errorEmailSignUp ? "3px solid red" : "none")};
`;

const ErrorEmail = styled.span`
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  margin-top: 5px;
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
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  cursor: ${(props) => (props.disabled ? "cursor" : "pointer")};
`;

const LoginIcon = styled.span`
  font-size: 16px;
  color: #ffffff;
  margin-right: 5px;
`;
