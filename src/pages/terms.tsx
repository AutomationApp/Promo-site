import React from "react";
import LoadingSpinner from "../components/common/loading-spinner";
import useTerms from "../hooks/useTerms";

const Terms = () => {
  const { pageData, loading } = useTerms();

  return (
    <>
      {loading ? (
        <LoadingSpinner height="100vh" />
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: pageData.content.rendered,
          }}
        />
      )}
    </>
  );
};

export default Terms;
