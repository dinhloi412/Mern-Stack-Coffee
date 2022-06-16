import React, { useContext } from "react";
import logo from "../../images/website/logo.png";
import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";
import axios from "axios";
import { Head } from "../../admin/component/mainpages/Head";
const Header = () => {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.UserAPI.isLogged;
  const [isAdmin, setIsAdmin] = state.UserAPI.isAdmin;
  const [cart] = state.UserAPI.cart;
  const [user] = state.UserAPI.user;
  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };
  const adminRouter = () => {
    return (
      <li>
        <Link to="/create_product">
          <ion-icon name="person-add-outline"></ion-icon>
        </Link>
      </li>
    );
  };
  const sidebarAdmin = () => {
    return <Head />;
  };
  const loggedRouter = () => {
    return (
      <li>
        <Link to="/history">History</Link>
        <Link to="/" onClick={logoutUser}>
          Logout
        </Link>
      </li>
    );
  };
  return (
    <header>
      {isAdmin ? (
        <div className="top-menu">
          <Link to="/" className="logo-box">
            <img src={logo} alt="pictures" />
          </Link>
          <ul className="button-menu">
            <li>
              <Link to="/admin/category">Category</Link>
            </li>
            <li>
              <Link to="/admin/products">Products</Link>
            </li>
            <li>
              <Link to="/history">Orders</Link>
            </li>
          </ul>
          <ul className="button-box">
            {/* <li className="group-search-input">
            <input
              className="search-input"
              type="text"
              placeholder="Search.."
            />
          </li>
          <li className="search-bar">
            <button>
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </li> */}

            <li className="account">
              <button className="btn__user--account">
                <ion-icon name="people-outline"></ion-icon>
                <span className="text__user--account">
                  {isLogged && user.name}
                </span>
              </button>
              <div className="list-account">
                <ul>
                  {isLogged ? (
                    loggedRouter()
                  ) : (
                    <li>
                      <Link to="/login" className="show-login">
                        <span className="text-login">Đăng nhập</span>
                      </Link>
                      <Link to="/register">
                        <span>Đăng ký</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </li>
            <li className="cart" id="item-cart">
              <span className="cart-quantity">{cart.length}</span>
              <button>
                <Link to="/cart">
                  <ion-icon name="cart-outline"></ion-icon>
                </Link>
              </button>
              <div className="cart-modal" id="cart-modal">
                <div className="empty-cart">
                  <span className="text-cart">Your Cart is Empty</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="top-menu">
          <Link to="/" className="logo-box">
            <img src={logo} alt="pictures" />
          </Link>
          <ul className="button-menu">
            <li>
              <Link to="/products">Sản phẩm</Link>
            </li>
            <li>
              <a href="#">Tin tức</a>
            </li>
            <li>
              <a href="#">Cửa hàng</a>
            </li>
            <li>
              <a href="#">Khuyến mãi</a>
            </li>
            <li>
              <a href="#">Tuyển dụng</a>
            </li>
          </ul>

          {/* <li className="group-search-input">
            <input
              className="search-input"
              type="text"
              placeholder="Search.."
            />
          </li>
          <li className="search-bar">
            <button>
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </li> */}
          <ul className="button-box">
            <li className="account">
              <button className="btn__user--account">
                <ion-icon name="people-outline"></ion-icon>
                <span className="text__user--account">
                  {isLogged && user.name}
                </span>
              </button>

              <div className="list-account">
                <ul>
                  {isLogged ? (
                    loggedRouter()
                  ) : (
                    <li>
                      <Link to="/login" className="show-login">
                        <span className="text-login">Đăng nhập</span>
                      </Link>
                      <Link to="/register">
                        <span>Đăng ký</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </li>
            <li className="cart" id="item-cart">
              <span className="cart-quantity">{cart.length}</span>
              <button>
                <Link to="/cart">
                  <ion-icon name="cart-outline"></ion-icon>
                </Link>
              </button>
              <div className="cart-modal" id="cart-modal">
                <div className="empty-cart">
                  <span className="text-cart">Your Cart is Empty</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
