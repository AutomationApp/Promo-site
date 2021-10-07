import React from "react";
import Footer from "./footer/footer";
import NavMenu from "./navbar";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <NavMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
