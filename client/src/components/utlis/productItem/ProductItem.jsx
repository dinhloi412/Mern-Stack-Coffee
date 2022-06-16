import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
// import "../../../css/query.css";
const ProductItem = ({ product }) => {
  const state = useContext(GlobalState);
  const addCart = state.UserAPI.addCart;
  return (
    <div className="item-product">
      <div className="image-product">
        <img src={product.images.url} alt="hinhanh" />
        <img className="imgJs" src={product.images.url} alt="" />
      </div>
      <Link to={`/detail/${product._id}`}>
        <div className="heading-product">
          <h4>{product.title}</h4>
        </div>
      </Link>
      <div className="detail-product">
        <p className="price-product">{product.price.toFixed(3)} vnđ</p>

        <Link
          to="#"
          onClick={() => addCart(product)}
          className="btn-cart__dialog btn-addtocart"
        >
          <ion-icon name="cart-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
