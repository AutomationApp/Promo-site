import React from "react";
import Seo from "../components/common/seo";
import { usePrivacyQuery } from "../graphql/usePrivacyQuery";

const Privacy = () => {
  const { wpPage } = usePrivacyQuery();

  return (
    <>
      <Seo title="Privacy policy - AutomationApp" />
      <div
        dangerouslySetInnerHTML={{
          __html: wpPage.content,
        }}
      />
    </>
  );
};

export default Privacy;
