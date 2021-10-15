import React from "react";
import { useTermsQuery } from "../graphql/useTermsQuery";

const Terms = () => {
  const { wpPage } = useTermsQuery();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: wpPage.content,
      }}
    />
  );
};

export default Terms;
