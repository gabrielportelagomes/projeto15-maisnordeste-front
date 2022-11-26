import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

// import { useUserData } from "../../providers/userData";
import URL from "../../constants/url";
import StatePageContainer from "./StatePageContainer";
import Header from "../../components/Header";
import TagsContainer from "./TagsContainer";
import ProductsContainer from "./ProductsContainer";
import ProductCard from "./ProductCard";
import TagCard from "./TagCard";

export default function StatePage() {
  const { estado } = useParams();
  const state = estado;
  const [stateName, setStateName] = useState("");
  const [productsFromState, setProductsFromState] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();
  const tags = [
    "Praia",
    "Serra",
    "Gastronomia",
    "História",
    "Festas",
    "Aventura",
    "Lagoas e rios",
  ];

  useEffect(() => {
    axios
      .get(`${URL}/states`)
      .then((response) => {
        setStateName(response.data.filter((s) => s.state === state)[0].name);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }, []);

  useEffect(() => {
    const promise = axios.get(`${URL}/products/${state}`);
    promise.then((res) => {
      setProductsFromState(res.data);
    });
    promise.catch((err) => {
      console.log(err.response.data);
      navigate("*");
    });
  }, []);

  return (
    <StatePageContainer>
      <Header />
      <h1>{stateName}</h1>
      <TagsContainer>
        {tags.map((tag) => (
          <TagCard
            tag={tag}
            key={tag}
            tags={tags}
            setSelectedTags={setSelectedTags}
            selectedTags={selectedTags}
          />
        ))}
      </TagsContainer>

      <ProductsContainer>
        {productsFromState.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </ProductsContainer>
    </StatePageContainer>
  );
}
