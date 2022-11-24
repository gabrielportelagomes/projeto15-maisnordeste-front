export default function InputImage() {
  return (
    <input
      placeholder="http://"
      type="text"
      name="title"
      onChange="{inputControl}"
      //value="{form.email}"
      required
      // disabled="{isBlocked}"
    />
  );
}
