import React from "react";
import Seo from "../components/common/seo";
import UseCasesSection from "../components/use-cases";
import Layout from "../components/common/layout/layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Automate your E-commerce store - AutomationApp" />
      <UseCasesSection />
    </Layout>
  );
};

export default IndexPage;
