import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Page from "./Page";

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  );
};
