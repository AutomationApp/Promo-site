import React from "react";
import Footer from "../footer/footer";
import { useLayoutQuery } from "../../../graphql/useLayoutQuery";
import HeroSection from "../hero-section-crm";

const LayoutCRM = ({ children, dataHeader, bgColor }) => {
  const { allWpPost, wpMenu, wpPage } = useLayoutQuery();

  return (
    <>
      <HeroSection
        navLinks={wpMenu.menuItems.nodes}
        landingSection={dataHeader}
        bgColor={bgColor}
      />
      <main>{children}</main>
      <Footer footerData={wpPage.footer} blogs={allWpPost.nodes} />
    </>
  );
};

export default LayoutCRM;
