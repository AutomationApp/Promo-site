import React from "react";
import Seo from "../components/common/seo";
import { useTermsQuery } from "../graphql/useTermsQuery";
import Layout from "../components/common/layout/layout";

const Terms = () => {
  const { wpPage } = useTermsQuery();

  return (
    <Layout>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        pageUrl={wpPage.seo.canonical}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: wpPage.content,
        }}
      />
    </Layout>
  );
};

export default Terms;
