import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [userAuth, setUserAuth] = useState(undefined);

  useEffect(() => {
    const userAuthStorage = localStorage.getItem("userAuthMaisNordeste");
    if (userAuthStorage) {
      setUserAuth(JSON.parse(userAuthStorage));
    } else {
      setUserAuth(undefined);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);