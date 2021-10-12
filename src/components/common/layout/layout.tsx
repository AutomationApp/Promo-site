import React from "react";
import Footer from "../footer/footer";
import NavMenu from "../navbar";
import useNavbar from "../../../hooks/useNavbar";
import LoadingSpinner from "../loading-spinner";
import useFooter from "../../../hooks/useFooter";
import useBlogs from "../../../hooks/useBlogs";

const Layout = ({ children }) => {
  const { navLinks, loading } = useNavbar();
  const { footerData, loading: load } = useFooter();
  const { blogs } = useBlogs();

  return (
    <>
      {loading ? (
        <LoadingSpinner height="100vh" />
      ) : (
        <>
          <NavMenu navLinks={navLinks} />
          <main>{children}</main>
          <>
            {load ? (
              <LoadingSpinner height="50vh" />
            ) : (
              <Footer footerData={footerData} blogs={blogs} />
            )}
          </>
        </>
      )}
    </>
  );
};

export default Layout;
