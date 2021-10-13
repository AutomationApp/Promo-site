import React from "react";
import LoadingSpinner from "../components/common/loading-spinner";
import usePrivacy from "../hooks/usePrivacy";

const Privacy = () => {
  const { pageData, loading } = usePrivacy();

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

export default Privacy;
