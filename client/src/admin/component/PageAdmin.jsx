import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import "../component/assets/css/grid.css";
import "../component/assets/css/app.css";
import Products from "./mainpages/products/Products";
import { Head } from "./mainpages/Head";
import Category from "./mainpages/category/Category";
import CreateProduct from "./mainpages/products/CreateProduct";
import { GlobalState } from "../../GlobalState";

const PageAdmin = () => {
  const state = useContext(GlobalState);
  const [isLogged, setIslogged] = state.UserAPI.isLogged;
  const [isAdmin, setIsAdmin] = state.UserAPI.isAdmin;
  return (
    <div className="container">
      <div className="main-content">
        <div className="row">
          {isAdmin && (
            <Routes>
              <Route path="/admin/category" exact element={<Category />} />
              <Route
                path="/admin/createproduct"
                exact
                element={<CreateProduct />}
              />
              <Route path="/admin/products" exact element={<Products />} />
              <Route
                path="/admin/editproduct/:id"
                exact
                element={<CreateProduct />}
              />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageAdmin;
