import React from "react";
import Seo from "../components/common/seo";
import { useTermsQuery } from "../graphql/useTermsQuery";

const Terms = () => {
  const { wpPage } = useTermsQuery();

  return (
    <>
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
    </>
  );
};

export default Terms;
