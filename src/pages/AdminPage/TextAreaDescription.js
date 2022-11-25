export default function TextArea({
  selectedDescription,
  setSelectedDescription,
}) {
  function textAreaControl(event) {
    setSelectedDescription(event.target.value);
  }

  return (
    <textarea
      placeholder="(max 100 caracteres)"
      type="text"
      onChange={textAreaControl}
      value={selectedDescription}
      required
      maxLength="100"
    />
  );
}
