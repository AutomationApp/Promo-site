import React from "react";
import Seo from "../components/common/seo";
import NewHome from "../components/home/newHome";
// import DetailsSection from "../components/home";

// markup
const IndexPage = () => {
  return (
    <>
      <Seo title="Automate your E-commerce store - AutomationApp" />
      {/* <DetailsSection /> */}
      <NewHome />
    </>
  );
};

export default IndexPage;
