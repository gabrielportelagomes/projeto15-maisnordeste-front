import AdminPageStyle from "./AdminPageStyle";
import ContainerStates from "./ContainerStates";
import ContainerCategories from "./ContainerCategories";
import ContainerSeasonsStyled from "./ContainerSeasons";

function AdminPage() {
  return (
    <AdminPageStyle onSubmit="">
      <h1> Cadastro de produtos </h1>
      <h2>Selecione o Estado</h2>
      <ContainerStates />
      <h2>Selecione a(s) categoria(s)</h2>
      <ContainerCategories />
      <h2>Nome da localidade</h2>
      <input
        placeholder="Digite o local aqui"
        type="text"
        name="title"
        onChange="{inputControl}"
        //value="{form.email}"
        required
      />
      <h2>Pequena descrição</h2>
      <textarea
        placeholder="Digite o local aqui"
        type="text"
        name="title"
        onChange="{inputControl}"
        //value="{form.email}"
        required
        // disabled="{isBlocked}"
      />
      <h2>URL da imagem</h2>
      <input
        placeholder="http://"
        type="text"
        name="title"
        onChange="{inputControl}"
        //value="{form.email}"
        required
        // disabled="{isBlocked}"
      />
      <ContainerSeasonsStyled />
      <button type="submit">Adicionar</button>
    </AdminPageStyle>
  );
}

export default AdminPage;
