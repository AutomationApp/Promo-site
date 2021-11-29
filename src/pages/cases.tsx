import React from "react";
import Seo from "../components/common/seo";
import UseCasesSection from "../components/use-cases";
import Layout from "../components/common/layout/layout";
import { useCasesPageQuery } from "../graphql/useCasesPageQuery";

// markup
const IndexPage = () => {
  const { wpPage } = useCasesPageQuery();

  return (
    <Layout>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        pageUrl={wpPage.seo.canonical}
      />
      <UseCasesSection useCases={wpPage.useCases} />
    </Layout>
  );
};

export default IndexPage;
