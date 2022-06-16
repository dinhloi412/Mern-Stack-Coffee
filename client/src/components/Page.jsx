import React, { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./cart/Cart";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Product from "./product/Product";
import NotFound from "./utlis/NotFound";
import "../css/general.css";
import "../css/style.css";
import "../css/product.css";
import "../css/query.css";
import DetailProduct from "./detailProduct/DetailProduct";
import { GlobalState } from "../GlobalState";
import OrderHistory from "./history/OrderHistory";
import OrderDetail from "./history/OrderDetail";
import PageProducts from "./product/PageProducts";

const Page = () => {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.UserAPI.isLogged;
  return (
    <Routes>
      <Route
        path="/login"
        exact
        element={isLogged ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={isLogged ? <Navigate to="/" replace /> : <Register />}
      />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/products" element={<PageProducts />} /> */}
      <Route path="/detail/:id" element={<DetailProduct />} />
      <Route path="/history" element={<OrderHistory />} />
      <Route path="/history/:id" element={<OrderDetail />} />
      <Route path="/products" element={<PageProducts />} />
      v
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Page;
