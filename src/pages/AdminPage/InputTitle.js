import { useState } from "react";

export default function InputTitle({ setSelectedTitle, selectedTitle }) {
  function inputControl(event) {
    setSelectedTitle(event.target.value);
  }

  return (
    <input
      placeholder="Digite o local aqui"
      type="text"
      name="title"
      onChange={inputControl}
      value={selectedTitle}
      required
    />
  );
}
