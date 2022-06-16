import React, { createContext, useEffect, useState } from "react";
import ProductsAPI from "./api/ProductsAPI";
import UserAPI from "./api/UserAPI";
import CategoryAPI from "./api/CategoryAPI";
import axios from "axios";
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const reFreshToken = async () => {
    const res = await axios.get("/user/refreshtoken");

    setToken(res.data.accessToken);
  };
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    console.log("render global");
    if (firstLogin) {
      reFreshToken();
    }
  }, []);
  const state = {
    token: [token, setToken],
    ProductsAPI: ProductsAPI(),
    UserAPI: UserAPI(token),
    CategoryAPI: CategoryAPI(token),
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
