export default function InputTitle({ setSelectedTitle, selectedTitle }) {
  function inputControl(event) {
    setSelectedTitle(event.target.value);
  }

  return (
    <input
      placeholder="Digite o local aqui"
      type="text"
      onChange={inputControl}
      value={selectedTitle}
      required
    />
  );
}
