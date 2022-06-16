import React, { useContext } from "react";

import { GlobalState } from "../../GlobalState";
import ProductItem from "../utlis/productItem/ProductItem";
import Loading from "../utlis/loading/Loading";
import LoadMore from "./LoadMore";
const Product = () => {
  const state = useContext(GlobalState);

  const [products] = state.ProductsAPI.products;
  return (
    <main>
      <section className="products">
        <div className="list-product" id="list-product">
          {products.map((product) => {
            return <ProductItem key={product._id} product={product} />;
          })}
        </div>

        <LoadMore />
      </section>
      {products.length === 0 && <Loading />}
    </main>
  );
};

export default Product;
