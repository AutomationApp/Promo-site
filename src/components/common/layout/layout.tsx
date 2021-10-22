import React from "react";
import Footer from "../footer/footer";
import NavMenu from "../navbar";
import { useLayoutQuery } from "../../../graphql/useLayoutQuery";

const Layout = ({ children }) => {
  const { allWpPost, wpMenu, wpPage } = useLayoutQuery();

  return (
    <>
      <NavMenu navLinks={wpMenu.menuItems.nodes} />
      <main>{children}</main>
      <Footer footerData={wpPage.footer} blogs={allWpPost.nodes} />
    </>
  );
};

export default Layout;
