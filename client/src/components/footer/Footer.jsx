import React from "react";
import logo from "../../images/website/logo.png";
import googlePlay from "../../images/website/Googleplay.png";
import appStore from "../../images/website/Appstore.png";

const Footer = () => {
  return (
    <footer className="mt-10">
      <section>
        <div className="footer-row">
          <div className="col-3">
            <h3 className="footer-head">Products</h3>
            <ul className="menu">
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">product help</a>
              </li>
              <li>
                <a href="#">warranty</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h3 className="footer-head">services</h3>
            <ul className="menu">
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">product help</a>
              </li>
              <li>
                <a href="#">warranty</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h3 className="footer-head">support</h3>
            <ul className="menu">
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">product help</a>
              </li>
              <li>
                <a href="#">warranty</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <div className="contact">
              {/* <div className="contact-imgLogo">
                <img src={logo} alt="" />
              </div> */}
              <ul className="contact-socials">
                <li>
                  <a href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
              </ul>
              <div className="img-download">
                <img src={googlePlay} alt="" />
                <img src={appStore} alt="" />
              </div>
            </div>
          </div>
          <div className="contact-mobile">
            <ul className="contact-socials">
              <li>
                <a href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
            </ul>
            <div className="img-download">
              <img src={googlePlay} alt="" />
              <img src={appStore} alt="" />
            </div>
          </div>
        </div>
        <div className="footer-cover"></div>
      </section>
    </footer>
  );
};

export default Footer;
