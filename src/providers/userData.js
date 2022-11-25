import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth";
import URL from "../constants/url";

const UserDataContext = createContext({});

export const UserDataProvider = (props) => {
  const { userAuth } = useAuth();
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    if (userAuth !== undefined) {
      axios
        .get(`${URL}/users`, {
          headers: {
            Authorization: `Bearer ${userAuth.token}`,
          },
        })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => console.log(error.response.data.message));
    }
  }, [userAuth]);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
