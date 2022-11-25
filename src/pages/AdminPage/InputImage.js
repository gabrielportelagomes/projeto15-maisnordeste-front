export default function InputImage({ setSelectedImage, selectedImage }) {
  function inputControl(event) {
    setSelectedImage(event.target.value);
  }

  return (
    <input
      placeholder="http://"
      type="url"
      onChange={inputControl}
      value={selectedImage}
      required
    />
  );
}
