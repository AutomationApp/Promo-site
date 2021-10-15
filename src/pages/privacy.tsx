import React from "react";
import { usePrivacyQuery } from "../graphql/usePrivacyQuery";

const Privacy = () => {
  const { wpPage } = usePrivacyQuery();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: wpPage.content,
      }}
    />
  );
};

export default Privacy;
