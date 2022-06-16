import React from "react";

export const Head = () => {
  return (
    <>
      <head>
        <link rel="shortcut icon" href="/images/logo-mb.png" type="image/png" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <div className="sidebar">
        <ul class="sidebar-menu">
          <li>
            <a href="#" class="active">
              <i class="bx bx-home"></i>
              <span>dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-shopping-bag"></i>
              <span>sales</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-chart"></i>
              <span>analytic</span>
            </a>
          </li>
          <li class="sidebar-submenu">
            <a href="#" class="sidebar-menu-dropdown">
              <i class="bx bx-user-circle"></i>
              <span>account</span>
              <div class="dropdown-icon"></div>
            </a>
            <ul class="sidebar-menu sidebar-menu-dropdown-content">
              <li>
                <a href="#">edit profile</a>
              </li>
              <li>
                <a href="#">account settings</a>
              </li>
              <li>
                <a href="#">billing</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-submenu">
            <a href="#" class="sidebar-menu-dropdown">
              <i class="bx bx-category"></i>
              <span>project</span>
              <div class="dropdown-icon"></div>
            </a>
            <ul class="sidebar-menu sidebar-menu-dropdown-content">
              <li>
                <a href="#">list</a>
              </li>
              <li>
                <a href="#">add project</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-submenu">
            <a href="#" class="sidebar-menu-dropdown">
              <i class="bx bx-category"></i>
              <span>e-commerce</span>
              <div class="dropdown-icon"></div>
            </a>
            <ul class="sidebar-menu sidebar-menu-dropdown-content">
              <li>
                <a href="#">list product</a>
              </li>
              <li>
                <a href="#">add product</a>
              </li>
              <li>
                <a href="#">orders</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-mail-send"></i>
              <span>mail</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-chat"></i>
              <span>chat</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-calendar"></i>
              <span>calendar</span>
            </a>
          </li>
          <li class="sidebar-submenu">
            <a href="#" class="sidebar-menu-dropdown">
              <i class="bx bx-cog"></i>
              <span>settings</span>
              <div class="dropdown-icon"></div>
            </a>
            <ul class="sidebar-menu sidebar-menu-dropdown-content">
              <li>
                <a href="#" class="darkmode-toggle" id="darkmode-toggle">
                  darkmode
                  <span class="darkmode-switch"></span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
