import React from "react";
import Seo from "../components/common/seo";
import FeaturesSection from "../components/features";
import { useFeaturesQuery } from "../graphql/useFeaturesQuery";
import Layout from "../components/common/layout/layout";

const Features = () => {
  const { wpPage } = useFeaturesQuery();

  return (
    <Layout>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        pageUrl={wpPage.seo.canonical}
      />
      <FeaturesSection wpPage={wpPage} />
    </Layout>
  );
};

export default Features;
