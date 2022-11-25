import AdminPageStyle from "./AdminPageStyle";
import ContainerStates from "./ContainerStates";
import ContainerCategories from "./ContainerCategories";
import ContainerSeasonsStyled from "./ContainerSeasons";
import TextAreaDescription from "./TextAreaDescription";
import InputTitle from "./InputTitle";
import InputImage from "./InputImage";
import { useState } from "react";
import Logo from "../../components/Logo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import URL from "../../constants/url";

function AdminPage() {
  const [selectedState, setSelectedState] = useState("MA");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSeasons, setSelectedSeasons] = useState({
    altaTemporada: "",
    baixaTemporada: "",
  });

  const navigate = useNavigate();

  const form = {
    admin: "erick1@gmail.com", //=> userData.email
    title: selectedTitle,
    state: selectedState,
    description: selectedDescription,
    image: selectedImage,
    tags: selectedCategories,
    prices: {
      altaTemporada: Number(
        selectedSeasons.altaTemporada.replace(".", "").replace(",", "")
      ),
      baixaTemporada: Number(
        selectedSeasons.baixaTemporada.replace(".", "").replace(",", "")
      ),
      cafe: 5000,
      translado: 50000,
    },
    stock: {
      natal: 10,
      carnaval: 10,
      reveillon: 10,
      pascoa: 10,
      baixaTemporada1: 20,
      baixaTemporada2: 20,
    },
  };

  function adicionar(event) {
    event.preventDefault();
    if (selectedCategories.length === 0) {
      alert("Selecione pelo menos uma categoria!");
      return;
    }
    const promise = axios.post(`${URL}/products`, form);
    promise.then((res) => {
      alert(res.data.message);
      const answer = window.confirm("Deseja cadastrar outro produto?");
      if (answer === true) {
        window.location.reload();
      } else {
        navigate("/");
      }
    });
    promise.catch((err) => {
      alert(err.response.data.message);
      navigate("/");
      window.location.reload();
    });
  }

  return (
    <>
      <Logo />
      <AdminPageStyle onSubmit={adicionar}>
        <h1>Cadastro de produtos</h1>
        <h2>Selecione o Estado</h2>
        <ContainerStates setSelectedState={setSelectedState} />
        <h2>Selecione a(s) categoria(s)</h2>
        <ContainerCategories
          setSelectedCategories={setSelectedCategories}
          selectedCategories={selectedCategories}
        />
        <h2>Nome da localidade</h2>
        <InputTitle
          setSelectedTitle={setSelectedTitle}
          selectedTitle={selectedTitle}
        />
        <h2>Pequena descrição</h2>
        <TextAreaDescription
          setSelectedDescription={setSelectedDescription}
          selectedDescription={selectedDescription}
        />
        <h2>URL da imagem</h2>
        <InputImage
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
        <ContainerSeasonsStyled
          selectedSeasons={selectedSeasons}
          setSelectedSeasons={setSelectedSeasons}
        />
        <button type="submit">Adicionar</button>
      </AdminPageStyle>
    </>
  );
}

export default AdminPage;
