import { createContext, useContext, useState } from "react";

const UserDataContext = createContext({});

export const UserDataProvider = (props) => {
  const [userData, setUserData] = useState(undefined);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
