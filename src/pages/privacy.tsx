import React from "react";
import Seo from "../components/common/seo";
import { usePrivacyQuery } from "../graphql/usePrivacyQuery";
import Layout from "../components/common/layout/layout";

const Privacy = () => {
  const { wpPage } = usePrivacyQuery();

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

export default Privacy;
