export default function TextArea() {
    return (
        <textarea
        placeholder="(max 200 caracteres)"
        type="text"
        name="title"
        onChange="{inputControl}"
        //value="{form.email}"
        required
        // disabled="{isBlocked}"
      />
    )
}