export default function InputTitle() {
  return (
    <input
      placeholder="Digite o local aqui"
      type="text"
      name="title"
      onChange="{inputControl}"
      //value="{form.email}"
      required
    />
  );
}
