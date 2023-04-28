import React, { useContext } from "react";

export const AuthStorageContext = React.createContext();

const useAuthStorage = () => {
  return useContext(AuthStorageContext);
};

export default useAuthStorage;
