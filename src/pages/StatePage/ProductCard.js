import { useState } from "react";
import { TagCardStyle } from "./TagCard";
import ProductCardStyle from "./ProductCardStyle";
import ProductCardDescription from "./ProductCardDescription";

export default function ProductCard({ product }) {
  const { title, tags, description, image, _id } = product;
  const [isOpen, setIsOpen] = useState(false);
  const idProduto = _id;

  function openMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <ProductCardStyle image={image} isOpen={isOpen}>
      <div>
        <h2 onClick={openMenu}>{title}</h2>
        {!isOpen ? (
          ""
        ) : (
          <ProductCardDescription
            tags={tags}
            description={description}
            idProduto={idProduto}
          />
        )}
      </div>
    </ProductCardStyle>
  );
}
