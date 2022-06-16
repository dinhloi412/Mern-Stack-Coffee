import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import "../../css/product.css";

const DetailProduct = () => {
  const state = useContext(GlobalState);
  const params = useParams();

  const [products] = state.ProductsAPI.products;
  const [detailProduct, setDetailProduct] = useState([]);
  const addCart = state.UserAPI.addCart;

  useEffect(() => {
    console.log("re render");
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) {
          setDetailProduct(product);
        }
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;
  return (
    <div className="item-product__page">
      <div className="items-product mt-5">
        <div className="colum-left__product">
          <div className="img--product">
            <img
              className="img--product__main"
              src={detailProduct.images.url}
              alt="caphesua"
            />
            <img
              data-id=""
              className="img--product__detail"
              src={detailProduct.images.url}
              alt="caphesua"
            />
          </div>
          <div className="decription--product">
            <p>{detailProduct.description}</p>
          </div>
        </div>
        <div className="colum-right__product">
          <div className="heading--detail__product">
            <h1>{detailProduct.title} </h1>
            <div className="price-quality__product">
              <span>{detailProduct.price.toFixed(3)}đ</span>
            </div>
          </div>
          <div className="select-size">
            <div className="card-product__option">
              <span>CHỌN SIZE(BẮT BUỘC) || Lượt mua {detailProduct.sold}</span>
            </div>
            <div className="card-product__option-item">
              <div className="control-size__option_item">
                <input type="radio" name="sizeRadio" id="S" value="S" />
                <label htmlFor="small">Nhỏ</label>
              </div>
              <div className="control-size__option_item">
                <input type="radio" name="sizeRadio" id="M" value="M" />
                <label htmlFor="normal">Trung bình</label>
              </div>
              <div className="control-size__option_item">
                <input type="radio" name="sizeRadio" id="L" value="L" />
                <label htmlFor="big">Lớn</label>
              </div>
            </div>
          </div>
          <Link to="/cart" onClick={() => addCart(detailProduct)}>
            <button
              className="btn-addItem__product"
              onClick={() => addCart(detailProduct)}
            >
              Mua ngay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
