import { createContext, useContext, useState } from "react";

const CartDataContext = createContext({});

export const CartDataProvider = (props) => {
  const [cartData, setCartData] = useState(undefined);

  return (
    <CartDataContext.Provider value={{ cartData, setCartData }}>
      {props.children}
    </CartDataContext.Provider>
  );
};

export const useCartData = () => useContext(CartDataContext);
