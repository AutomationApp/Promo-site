import React from "react";
import Seo from "../components/common/seo";
import { usePrivacyQuery } from "../graphql/usePrivacyQuery";

const Privacy = () => {
  const { wpPage } = usePrivacyQuery();

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

export default Privacy;
