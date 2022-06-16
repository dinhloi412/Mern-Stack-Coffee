import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";
import Loading from "../../../../components/utlis/loading/Loading";
import LoadMore from "../../../../components/product/LoadMore";
const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;
  const [token] = state.token;
  const [loading, setLoading] = useState(false);
  const [callback, setCallback] = state.ProductsAPI.callback;
  console.log(products);
  const deleteProduct = async (id, public_id) => {
    try {
      try {
        setLoading(true);
        const destroy = axios.post(
          "/api/detsroy",
          { public_id },
          {
            headers: { Authorization: token },
          }
        );
        const deletePro = axios.delete(`/api/products/${id}`, {
          headers: { Authorization: token },
        });
        await destroy;
        await deletePro;
        setCallback(!callback);
        setLoading(false);
      } catch (error) {}
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div className="col-12 mt-10">
      <div className="box">
        <div className="box-header">
          Products
          <Link to="/admin/createproduct" className="btn-new btn-fix">
            Thêm sản phẩm
          </Link>
        </div>

        <div className="box-body overflow-scroll">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Sản phẩm</th>
                <th>Loại</th>
                <th>Order status</th>
                <th>Đã bán</th>
                <th>Giá</th>
                <th> </th>
              </tr>
            </thead>
            {loading ? (
              Loading
            ) : (
              <tbody>
                {products.map((item) => (
                  <tr key={item._id}>
                    <td>{item.product_id}</td>
                    <td>
                      <div className="order-owner">
                        <img src={item.images.url} alt={item.title} />
                        <span>{item.title}</span>
                      </div>
                    </td>
                    <td>{item.category}</td>
                    <td>
                      <span className="order-status order-ready">Ready</span>
                    </td>
                    <td>
                      <div className="payment-status payment-pending">
                        <div className="dot"></div>
                        <span>{item.sold}</span>
                      </div>
                    </td>
                    <td>{item.price.toFixed(3)} vnđ</td>
                    <td>
                      <Link to={`/admin/editproduct/${item._id}`}>
                        <ion-icon name="document-outline"></ion-icon>
                      </Link>
                    </td>
                    <td>
                      {" "}
                      <button
                        className="border-none"
                        onClick={() =>
                          deleteProduct(item._id, item.images.public_id)
                        }
                      >
                        <ion-icon name="trash-outline"></ion-icon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          <LoadMore />
        </div>
      </div>
    </div>
  );
};

export default Products;
