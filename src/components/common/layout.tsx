import React from "react";
import Footer from "./footer/footer";
import NavMenu from "./navbar";
import useNavbar from "../../hooks/useNavbar";
import LoadingSpinner from "./loading-spinner";

const Layout = ({ children }) => {
  const { navLinks, loading } = useNavbar();

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <NavMenu navLinks={navLinks} />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
