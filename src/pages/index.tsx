import React from "react";
import Seo from "../components/common/seo";
import DetailsSection from "../components/home";
import { useCustomPostQuery } from "../graphql/useCustomPostQuery";

// markup
const IndexPage = () => {
  const {
    allWpRedirect: { nodes },
  } = useCustomPostQuery();
  console.log(nodes);
  return (
    <>
      <Seo title="Automate your E-commerce store - AutomationApp" />
      <DetailsSection />
    </>
  );
};

export default IndexPage;
