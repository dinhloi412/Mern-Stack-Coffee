import React from "react";
import Filters from "./Filters";
import Product from "./Product";

const PageProducts = () => {
  return (
    <div className="mt-10">
      <h2 className="heading-h1">SẢN PHẨM</h2>
      <Filters />
      <Product />
    </div>
  );
};

export default PageProducts;
