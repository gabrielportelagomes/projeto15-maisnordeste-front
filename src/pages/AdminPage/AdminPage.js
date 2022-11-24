import AdminPageStyle from "./AdminPageStyle";
import ContainerStates from "./ContainerStates";
import ContainerCategories from "./ContainerCategories";
import ContainerSeasonsStyled from "./ContainerSeasons";
import TextAreaDescription from "./TextAreaDescription";
import InputTitle from "./InputTitle";
import InputImage from "./InputImage";
import { useState } from "react";

const states = ["MA", "PI", "CE", "RN", "PB", "PE", "AL", "SE", "BA"];

function AdminPage() {
  const [state, setState] = useState(states[0]);

  return (
    <AdminPageStyle onSubmit="">
      <h1>Cadastro de produtos</h1>
      <h2>Selecione o Estado</h2>
      <ContainerStates states={states} setState={setState} />
      <h2>Selecione a(s) categoria(s)</h2>
      <ContainerCategories />
      <h2>Nome da localidade</h2>
      <InputTitle />
      <h2>Pequena descrição</h2>
      <TextAreaDescription />
      <h2>URL da imagem</h2>
      <InputImage />
      <ContainerSeasonsStyled />
      <button type="submit">Adicionar</button>
    </AdminPageStyle>
  );
}

export default AdminPage;
