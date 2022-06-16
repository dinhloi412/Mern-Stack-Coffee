import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onchageInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", { ...user });
      localStorage.setItem("firstLogin", true);
      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div class="modal-loginJS mt-10">
      <div class="popup-login form__box">
        <form class="form" onSubmit={registerSubmit}>
          <div class="heading-form-Login">
            <h2>Đăng ký</h2>
          </div>
          <div class="form-element">
            <input
              type="text"
              name="name"
              id="email"
              placeholder="Enter Name"
              required
              value={user.name}
              onChange={onchageInput}
            />
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
            <label for="remember">Remember</label>
          </div>
          <div class="form-element">
            <button class="button-login" type="submit">
              Sign in
            </button>
          </div>
          <div class="form-element">
            <a href="#">Forgot password</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
