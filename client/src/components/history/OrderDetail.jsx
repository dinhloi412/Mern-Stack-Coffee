import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../GlobalState";

const OrderDetail = () => {
  const state = useContext(GlobalState);
  const [history] = state.UserAPI.history;
  const [orderDetails, setOrderDetails] = useState([]);

  const params = useParams();
  useEffect(() => {
    if (params.id) {
      history.forEach((item) => {
        if (item._id === params.id) setOrderDetails(item);
      });
    }
  }, [params.id, history]);

  if (orderDetails.length === 0) return null;
  return (
    <section className="products">
      <div className="col-12 mt-10">
        <div className="box">
          <div className="box-body overflow-scroll">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Postal Code</th>
                  <th>Country Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{orderDetails.address.recipient_name}</td>
                  <td>
                    {orderDetails.address.line1 +
                      " - " +
                      orderDetails.address.city}
                  </td>
                  <td>{orderDetails.address.postal_code}</td>
                  <td>{orderDetails.address.country_code}</td>
                </tr>
              </tbody>
            </table>

            <table style={{ margin: "30px 0px" }}>
              <thead>
                <tr>
                  <th></th>
                  <th>Products</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.cart.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="order-owner">
                        <img src={item.images.url} alt={item.title} />
                      </div>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td> {(item.price * item.quantity).toFixed(2)} vnđ</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetail;
