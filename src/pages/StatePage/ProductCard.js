import { useState } from "react";
import { TagCardStyle } from "./TagCard";
import ProductCardStyle from "./ProductCardStyle";

export default function ProductCard({ product }) {
  const { title, tags, description, image } = product;
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <ProductCardStyle image={image} isOpen={isOpen}>
      <div onClick={openMenu}>
        <h2>{title}</h2>
        {!isOpen ? (
          <></>
        ) : (
          <div>
            <ul>
              {tags.map((tag) => (
                <TagCardStyle key={tag}>{tag}</TagCardStyle>
              ))}
            </ul>
            <nav>{description}</nav>
          </div>
        )}
      </div>
    </ProductCardStyle>
  );
}
