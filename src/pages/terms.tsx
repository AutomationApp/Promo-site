import React from "react";
import Seo from "../components/common/seo";
import { useTermsQuery } from "../graphql/useTermsQuery";

const Terms = () => {
  const { wpPage } = useTermsQuery();

  return (
    <>
      <Seo title="Terms of Service - AutomationApp" />

      <div
        dangerouslySetInnerHTML={{
          __html: wpPage.content,
        }}
      />
    </>
  );
};

export default Terms;
