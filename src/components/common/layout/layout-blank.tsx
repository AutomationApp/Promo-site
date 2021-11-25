import React from "react";
import Footer from "../footer/footer";
import { useLayoutQuery } from "../../../graphql/useLayoutQuery";
import HeroSection from "../hero-section";
import { useHomePageQuery } from "../../../graphql/useHomeQuery";

const LayoutBlank = ({ children }) => {
  const { allWpPost, wpMenu, wpPage } = useLayoutQuery();
  const {
    wpPage: { home },
  } = useHomePageQuery();

  return (
    <>
      <HeroSection
        navLinks={wpMenu.menuItems.nodes}
        landingSection={home.landingSection}
      />
      <main>{children}</main>
      <Footer footerData={wpPage.footer} blogs={allWpPost.nodes} />
    </>
  );
};

export default LayoutBlank;
