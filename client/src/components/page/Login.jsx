import React, { useState } from "react";
import "../../css/modal.css";
import BannerLogin from "../../images/website/bannerLogin.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onchageInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });
      localStorage.setItem("firstLogin", true);
      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div class="modal-loginJS mt-10">
      <div class="popup-login form__box">
        <form class="form" onSubmit={loginSubmit}>
          <div class="heading-form-Login">
            <h2>Đăng nhập</h2>
          </div>
          <div class="form-element">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
              value={user.email}
              onChange={onchageInput}
            />
          </div>
          <div class="form-element">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              required
              autoComplete="on"
              value={user.password}
              onChange={onchageInput}
            />
          </div>
          <div class="form-element">
            <input type="checkbox" name="remember" id="remember" />
            <label for="remember">Lưu thông tin đăng nhập</label>
          </div>
          <div class="form-element">
            <button class="button-login" type="submit">
              Đăng nhập
            </button>
          </div>
          <div class="form-element">
            <Link to="/register">Bạn chưa có tài khoản?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
