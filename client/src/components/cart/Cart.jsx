import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../GlobalState";
import "../../css/payment.css";
import axios from "axios";
import PaypalButton from "./PaypalButton";
const Cart = () => {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.UserAPI.cart;
  const [total, setTotal] = useState(0);
  const [token] = state.token;
  useEffect(() => {
    const getTotal = async () => {
      const total = cart.reduce((pre, item) => {
        return pre + item.price * item.quantity;
      }, 0);
      setTotal(total);
    };
    getTotal();
    console.log("cart render");
  }, [cart]);
  const addToCart = async () => {
    await axios.patch(
      "/user/addcart",
      { cart },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  };
  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
    addToCart(cart);
  };
  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
    addToCart(cart);
  };
  if (cart.length === 0) {
    return (
      <h2 className="mt-10" style={{ textAlign: "center", fontSize: "3rem" }}>
        {" "}
        Cart Empty
      </h2>
    );
  }
  const removeProduct = (id) => {
    if (window.confirm("Do you want delete this Product")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
      addToCart(cart);
    }
  };
  const transSuccess = async (payment) => {
    console.log(payment);
    const { paymentID, address } = payment;
    await axios.post(
      "/api/payment",
      { cart, paymentID, address },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setCart([]);
    alert("You have successfull place orders");
  };
  return (
    <section className="page-checkout mb-10">
      <div className="checkout-heading">
        <h1 className="heading-h1">
          <ion-icon className="cart"></ion-icon> Giỏ hàng
        </h1>
      </div>

      <div className="group-checkout mt-5">
        <div className="checkout-table p-1">
          <table>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Số lượng</th>
                <th className="th-prices">Giá</th>
                <th>Tổng</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product._id}>
                  <td>
                    <div className="checkout-infor-product">
                      <div className="checkout-img">
                        <img src={product.images.url} alt="" />
                      </div>
                      <div className="checkout-content">
                        <h3>{product.title}</h3>
                        <span>Size nhỏ</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="counter">
                      <span
                        className="down"
                        onClick={() => decrement(product._id)}
                      >
                        -
                      </span>
                      <input
                        id="ipQuantity"
                        type="text"
                        value={product.quantity}
                        disabled
                      />
                      <span
                        className="up"
                        onClick={() => increment(product._id)}
                      >
                        +
                      </span>
                    </div>
                  </td>
                  <td>{product.price.toFixed(3)} vnđ</td>
                  <td>{(product.price * product.quantity).toFixed(3)} vnđ</td>
                  <td>
                    <button
                      className="btn-addtocart"
                      onClick={() => removeProduct(product._id)}
                    >
                      <ion-icon name="close-outline"></ion-icon>
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="row__payment">
            <span>Total: {total}</span>
            <PaypalButton total={total} transSuccess={transSuccess} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
