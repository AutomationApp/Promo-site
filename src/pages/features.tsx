import React from "react";
import Seo from "../components/common/seo";
import FeaturesSection from "../components/features";
import { useFeaturesQuery } from "../graphql/useFeaturesQuery";

const Features = () => {
  const { wpPage } = useFeaturesQuery();

  return (
    <>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        pageUrl={wpPage.seo.canonical}
      />
      <FeaturesSection wpPage={wpPage} />
    </>
  );
};

export default Features;
